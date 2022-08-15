rm -rf diversifix-app
rm -rf public/diversifix-app
rm -rf build
git clone https://github.com/diversifix/diversifix.git diversifix-app --depth 1 && \
echo "SKIP_PREFLIGHT_CHECK=true" > diversifix-app/react-ui/.env && \
cd diversifix-app/react-ui && \
yarn install && \
REACT_APP_API_BASE_URL="https://api.diversifix.org/v2" \
REACT_APP_VCS_REVISION=$(git rev-parse HEAD) \
yarn build && \
cp -R build ../../public/diversifix-app
