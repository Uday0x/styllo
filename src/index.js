

function initilaize(){
    let obj = document.querySelectorAll("*");
    obj.forEach((i) => {
      // let eachClassList = i.classList
      // // eachClassList.map((i)=>{
      // //    console.log(i)
      // // })

      // console.log(eachClassList[11])
      // console.log(i)
      // console.log(i.classList)
      i.classList.forEach((cls) => {
        //    console.log(cls)
        if (cls.startsWith("chai-")) {
          console.log(cls);

          const parts = cls.split("-");
          console.log(parts);

          //   const map = {
          //     p: "padding",
          //     m: "margin",
          //     bg: "backgroundColor",
          //   };

          //   let finalWord = map[parts[1]]
          //   if(!finalWord) return "Invalid class"
          //   const value = parts[2]
          //   let finalValue =value + `px`

          //   i.style[finalWord] = finalValue

          const handlers = {
            p: (el, val) => (el.style.padding = val + "px"),
            m: (el, val) => (el.style.margin = val + "px"),
            pt: (el, val) => (el.style.paddingTop = val + "px"),
            pb: (el, val) => (el.style.paddingBottom = val + "px"),
            pl: (el, val) => (el.style.paddingLeft = val + "px"),
            pr: (el, val) => (el.style.paddingRight = val + "px"),
            w: (el, val) => (el.style.width = val + "px"),
            h: (el, val) => (el.style.height = val + "px"),

            mt: (el, val) => (el.style.marginTop = val + "px"),
            mb: (el, val) => (el.style.marginBottom = val + "px"),

            //colors
            bg: (el, val) => (el.style.backgroundColor = val),

            // typography
            fs: (el, val) => (el.style.fontSize = val + "px"),

            // alignment
            center: (el) => (el.style.textAlign = "center"),

            // border
            br: (el, val) => (el.style.borderRadius = val + "px"),

            //layout
            flex: (el) => (el.style.display = "flex"),
            grid: (el) => (el.style.display = "grid"),

            //justify
            jc: (el, val) => (el.style.justifyContent = val),

            // align
            ai: (el, val) => (el.style.alignItems = val),

            border: (el, val) => (el.style.border = val),
            shadow: (el) =>
              (el.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)"),

            // position
            relative: (el) => (el.style.position = "relative"),
            absolute: (el) => (el.style.position = "absolute"),
          };

          const type = parts[1];
          const value = parts[2];
          //   if (handlers[type]) {
          //     handlers[type](i, value);
          //   }

          if (handlers[type]) {
            if (value !== undefined) {
              handlers[type](i, value);
            } else {
              handlers[type](i);
            }
          }
          i.classList.remove(cls);
        }
      });
    });
}


document.addEventListener("DOMContentLoaded", initilaize)
export default initilaize