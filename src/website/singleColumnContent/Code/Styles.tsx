import React from 'react'

const Styles = () => (
  <style>{`
      code[class*=language-],pre[class*=language-]{color:#d6deeb;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:rgba(29,59,83,.99)}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:rgba(29,59,83,.99)}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{color:#fff;background:#011627}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.prolog{color:#637777;font-style:italic}.token.punctuation{color:#c792ea}.namespace{color:#b2ccd6}.token.deleted{color:rgba(239,83,80,.56);font-style:italic}.token.property,.token.symbol{color:#80cbc4}.token.keyword,.token.operator,.token.tag{color:#7fdbca}.token.boolean{color:#ff5874}.token.number{color:#f78c6c}.token.builtin,.token.char,.token.constant,.token.function{color:#82aaff}.token.doctype,.token.selector{color:#c792ea;font-style:italic}.token.attr-name,.token.inserted{color:#addb67;font-style:italic}.language-css .token.string,.style .token.string,.token.entity,.token.string,.token.url{color:#addb67}.token.atrule,.token.attr-value,.token.class-name{color:#ffcb8b}.token.important,.token.regex,.token.variable{color:#d6deeb}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}
      pre[data-line] {
        position: relative;
        padding: 1em 0 1em 3em;
      }
      
      .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em; /* Same as .prism’s padding-top */
      
        background: hsla(24, 20%, 50%,.08);
        background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
      
        pointer-events: none;
      
        line-height: inherit;
        white-space: pre;
      }
      
      @media print {
        .line-highlight {
          /*
           * This will prevent browsers from replacing the background color with white.
           * It's necessary because the element is layered on top of the displayed code.
           */
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      
        
      
      pre[id].linkable-line-numbers span.line-numbers-rows {
        pointer-events: all;
      }
      pre[id].linkable-line-numbers span.line-numbers-rows > span:before {
        cursor: pointer;
      }
      pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
        background-color: rgba(128, 128, 128, .2);
      }
      pre[class*="language-"].line-numbers {
        position: relative;
        padding-left: 3.8em;
        counter-reset: linenumber;
      }
      
      pre[class*="language-"].line-numbers > code {
        position: relative;
        white-space: inherit;
      }
      
      .line-numbers .line-numbers-rows {
        position: absolute;
        pointer-events: none;
        top: 0;
        font-size: 100%;
        left: -3.8em;
        width: 3em; /* works for line-numbers below 1000 lines */
        letter-spacing: -1px;
        border-right: 1px solid #999;
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      
      }
      
        .line-numbers-rows > span {
          display: block;
          counter-increment: linenumber;
        }
      
          .line-numbers-rows > span:before {
            content: counter(linenumber);
            color: #999;
            display: block;
            padding-right: 0.8em;
            text-align: right;
          }
            
      `}</style>
)

export default Styles
