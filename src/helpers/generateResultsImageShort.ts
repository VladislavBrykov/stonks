const nodeHtmlToImage = require('node-html-to-image');

export async function generateImageShort(
  pairName,
  percent,
  startPrice,
  finishPrice,
  color,
  typeTurn,
) {
  console.log(pairName, percent, startPrice, finishPrice, color, typeTurn);
  await nodeHtmlToImage({
    output: './public/' + pairName + '.png',
    html:
      '<!doctype html>\n' +
      '<html lang="ru" dir="ltr">\n' +
      '<style>\n' +
      '  body {\n' +
      '    width: 580px;\n' +
      '  }' +
      '  .css-1ag7b6i {\n' +
      '    box-sizing: border-box;\n' +
      '    min-width: 0px;\n' +
      '    width: 580px;\n' +
      '    padding-left: 50px;\n' +
      '    padding-right: 50px;\n' +
      '    padding-top: 30px;\n' +
      '    padding-bottom: 30px;\n' +
      '    margin: 0px;\n' +
      '    /*background: url("../public/main/binance.jpg");*/\n' +
      '    background: url("https://imageup.ru/img42/3959994/binance.jpg");\n' +
      '\n' +
      '    background-size: 114%;\n' +
      '  }\n' +
      '  .css-4cffwv {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '  }\n' +
      '  .css-kducro {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 29px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    gap: 12px;\n' +
      '    color: rgb(255, 255, 255);\n' +
      '    -webkit-box-align: center;\n' +
      '    align-items: center;\n' +
      '  }\n' +
      '  .css-1f23r63 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 14px;\n' +
      '    line-height: 20px;\n' +
      '    color: #de4d4d;\n' +
      '  }\n' +
      '  .css-2bbebd {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    width: 1px;\n' +
      '    height: 16px;\n' +
      '    background-color: rgb(112, 122, 138);\n' +
      '  }\n' +
      '  .css-1c82c04 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 14px;\n' +
      '    line-height: 20px;\n' +
      '  }\n' +
      '  .css-2bbebd {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    width: 1px;\n' +
      '    height: 16px;\n' +
      '    background-color: rgb(112, 122, 138);\n' +
      '  }\n' +
      '  .css-169mre6 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 14px;\n' +
      '    line-height: 20px;\n' +
      '    width: 50%;\n' +
      '  }\n' +
      '\n' +
      '  .css-io5jed {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 4px 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    color: rgb(14, 203, 129);\n' +
      '    -webkit-box-align: baseline;\n' +
      '    align-items: baseline;\n' +
      '  }\n' +
      '  .css-cxlpc6 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 600;\n' +
      '    font-size: 48px;\n' +
      '    line-height: 56px;\n' +
      '  }\n' +
      '  .css-2bf818 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px 0px 0px 4px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 20px;\n' +
      '    line-height: 28px;\n' +
      '    width: 50%;\n' +
      '  }\n' +
      '  .css-1n05xc7 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    gap: 16px;\n' +
      '  }\n' +
      '  .css-uliqdc {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    flex-direction: column;\n' +
      '  }\n' +
      '  .css-11wo3c7 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 14px;\n' +
      '    line-height: 20px;\n' +
      '    color: rgb(183, 189, 198);\n' +
      '  }\n' +
      '  .css-5kga6o {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 4px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 500;\n' +
      '    font-size: 14px;\n' +
      '    line-height: 20px;\n' +
      '    color: rgb(183, 189, 198);\n' +
      '  }\n' +
      '  .css-uliqdc {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    flex-direction: column;\n' +
      '  }\n' +
      '  .css-1q9y7g4 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 26px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    -webkit-box-align: center;\n' +
      '    align-items: center;\n' +
      '  }\n' +
      '  .css-asbkqt {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px 12px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '  }\n' +
      '  element.style {\n' +
      '    height: 64px;\n' +
      '    width: 64px;\n' +
      '  }\n' +
      '  .css-1ag7b6i canvas {\n' +
      '    background-color: rgb(255, 255, 255);\n' +
      '    padding: 2px;\n' +
      '  }\n' +
      '  .css-uliqdc {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    display: flex;\n' +
      '    flex-direction: column;\n' +
      '  }\n' +
      '  .css-1fhtwc7 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 400;\n' +
      '    font-size: 12px;\n' +
      '    line-height: 16px;\n' +
      '    text-transform: uppercase;\n' +
      '    color: rgb(183, 189, 198);\n' +
      '  }\n' +
      '  .css-1sgx91u {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 600;\n' +
      '    font-size: 24px;\n' +
      '    line-height: 32px;\n' +
      '    color: rgb(255, 255, 255);\n' +
      '  }\n' +
      '  .css-acs7fj {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 4px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '    font-weight: 400;\n' +
      '    font-size: 12px;\n' +
      '    line-height: 16px;\n' +
      '    position: absolute;\n' +
      '    left: -197px;\n' +
      '    color: rgb(183, 189, 198);\n' +
      '    width: 50%;\n' +
      '    text-align: right;\n' +
      '  }\n' +
      '  .css-199qyhu {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 0px;\n' +
      '    min-width: 0px;\n' +
      '    line-height: 20px;\n' +
      '    color: rgb(240, 185, 11);\n' +
      '  }\n' +
      '  .css-gb6eb0 {\n' +
      '    box-sizing: border-box;\n' +
      '    margin: 6px 0px 0px;\n' +
      '    min-width: 0px;\n' +
      '    color: rgb(240, 185, 11);\n' +
      '  }\n' +
      '</style>\n' +
      '\n' +
      '<head>\n' +
      '  <div class="css-2mpv6v">\n' +
      '  <div id="share-position-poster" class="share-poster css-1ag7b6i">\n' +
      '    <div class="css-4cffwv"><img src="./public/main/features.svg" class="css-1ck0lx1"></div>\n' +
      '    <div class="css-kducro">\n' +
      '      <div data-bn-type="text" class="css-1f23r63">' +
      'Продать' +
      '</div>\n' +
      '      <div class="css-2bbebd"></div>\n' +
      '      <div data-bn-type="text" class="css-1c82c04">20X</div>\n' +
      '      <div class="css-2bbebd"></div><div data-bn-type="text" class="css-169mre6">' +
      pairName +
      ' Бессрочный</div>\n' +
      '    </div>\n' +
      '    <div class="css-io5jed"><div data-bn-type="text" class="css-cxlpc6">' +
      +'+' +
      percent +
      '%</div>\n' +
      '    </div>\n' +
      '    <div class="css-1n05xc7">\n' +
      '      <div class="css-uliqdc">\n' +
      '        <div data-bn-type="text" class="css-11wo3c7">Цена входа</div>\n' +
      '        <div data-bn-type="text" class="css-5kga6o">Цена маркировки</div>\n' +
      '      </div><div class="css-uliqdc">\n' +
      '      <div data-bn-type="text" class="css-199qyhu">' +
      startPrice +
      '</div>\n' +
      '      <div data-bn-type="text" class="css-gb6eb0">' +
      finishPrice +
      '</div></div>\n' +
      '    </div><div class="css-1q9y7g4">\n' +
      '    <div class="css-asbkqt">\n' +
      '      <canvas height="64" width="64" style="height: 64px; width: 64px;"></canvas>\n' +
      '    </div>\n' +
      '    <div class="css-uliqdc">\n' +
      '      <div data-bn-type="text" class="css-1fhtwc7">Реферальный код</div>\n' +
      '      <div data-bn-type="text" class="css-1sgx91u">180276971</div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '  </div>\n' +
      '  </div>\n' +
      '</head>\n' +
      '\n' +
      '</html>\n',
  }).then(() => console.log('The image was created successfully!'));
}
