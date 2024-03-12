module.exports = {
  // 當行 max 120
  printWidth: 120,
  // 使用 2 個空格縮排
  tabWidth: 2,
  // 不使用縮排符，而使用空格
  useTabs: false,
  // 移除程式結尾分號
  semi: false,
  // 使用單引號
  singleQuote: true,
  // 物件的 key 僅在必要時用引號
  quoteProps: 'as-needed',
  // jsx 不使用單引號，而使用雙引號
  jsxSingleQuote: false,
  // 末端逗號 <es5|none|all>
  trailingComma: 'none',
  // 大括號內的首尾需要空格
  bracketSpacing: true,
  // 標籤的反尖括號需要換行
  jsxBracketSameLine: true,
  // 箭頭函式，只有一個引數的時候，單參數不加括號 <always|avoid>
  arrowParens: 'avoid',
  // 每個檔案格式化的範圍是檔案的全部內容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要寫檔案開頭的 @prettier
  requirePragma: false,
  // 不需要自動在檔案開頭插入 @prettier
  insertPragma: false,
  // 使用預設的折行標準 <always|never|preserve>
  proseWrap: 'preserve',
  // 根據顯示樣式決定 html 要不要折行 <css|strict|ignore>
  htmlWhitespaceSensitivity: 'css',
  //  vue 檔案裡的 script & style 起步是否加上 tab
  vueIndentScriptAndStyle: false,
  // 換行符使用 lf \n <lf|crlf|cr|auto>
  endOfLine: 'lf',
  // 是否格式法嵌入式的程式碼 <off|auto>
  embeddedLanguageFormatting: 'auto'
}
