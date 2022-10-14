document.addEventListener(
  'DOMContentLoaded',
  ()=>{
    const tickers = document.querySelectorAll('[data-ticker]')
    tickers.forEach(ticker=>{
      const fontsize = ticker.style.fontSize
      const fontfamily = ticker.style.fontFamily
      const content = ticker.textContent
      console.log(content);
      const newEl = document.createElement('test');
      newEl.style.fontSize = fontsize + 'px';
      newEl.style.fontFamily = fontfamily;
      newEl.textContent = content
      document.body.appendChild(newEl);
      console.log(newEl.offsetWidth);
    })
    // console.log(tickers);
  }
)