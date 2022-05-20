rm -rf diversifix-app
rm -rf public/diversifix-app
rm -rf build
git clone git@github.com:diversifix/diversifix.git diversifix-app --depth 1
echo "SKIP_PREFLIGHT_CHECK=true" > diversifix-app/react-ui/.env
cd diversifix-app/react-ui && SKIP_PREFLIGHT_CHECK=true yarn install && yarn build && cp -R build ../../public/diversifix-app
cd ../..