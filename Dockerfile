FROM node:24.3-alpine AS builder

WORKDIR /home/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run typecheck
RUN npm run ci:format
RUN npm run ci:lint

ARG ENV \
  NEXT_PUBLIC_SITE_URL

RUN echo "ENV=$ENV" > .env && \
  echo "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL" > .env

RUN npm run build

RUN if [ "$ENV" = "prd" ]; then \
  ACCESS_POLICY="Allow"; \
  else \
  ACCESS_POLICY="Disallow"; \
  fi && \
  echo "User-agent: *" > standalone/public/robots.txt && \
  echo "$ACCESS_POLICY: /" >> standalone/public/robots.txt && \
  echo "Host: $NEXT_PUBLIC_SITE_URL" >> standalone/public/robots.txt && \
  echo "Sitemap: $NEXT_PUBLIC_SITE_URL/sitemap.xml" >> standalone/public/robots.txt

FROM node:24.3-alpine AS runner

RUN apk --no-cache add openssh-server && \
  echo "root:Docker!" | chpasswd && \
  ssh-keygen -A

COPY --from=builder /home/app/standalone /home/app/standalone
COPY --from=builder /home/app/ssh/sshd_config /etc/ssh/.
COPY --from=builder /home/app/ssh/start.sh start.sh

RUN chmod +x ./start.sh

EXPOSE 3000 2222

CMD ["./start.sh"]

# docker build --build-arg ENV="dev" `
# --build-arg NEXT_PUBLIC_SITE_URL="http://localhost:3000" `
# -t nextjs:15 --no-cache .

# docker run -d -p 3000:3000 -p 2222:2222 nextjs:15
