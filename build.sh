rm -rf diversifix
rm -rf app
git clone https://github.com/diversifix/diversifix.git --depth 1 && \
echo "SKIP_PREFLIGHT_CHECK=true" > diversifix/react-ui/.env && \
cd diversifix/react-ui && \
yarn install && \
REACT_APP_API_BASE_URL="https://api.diversifix.org/v2" \
REACT_APP_VCS_REVISION=$(git rev-parse HEAD) \
yarn build && \
cp -R build ../../app
quarto publish netlify --no-prompt --no-browser
