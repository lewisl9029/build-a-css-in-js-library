import*as m from"../web_modules/react.js";import*as t from"../web_modules/spectacle.js";import*as e from"../a_.js";import*as f from"../assets/emotion.webp.proxy.js";import*as S from"../assets/photo.jpg.proxy.js";import"../lib/component_.js";import*as s from"../lib/style_.js";const u=({children:i})=>e.cE(s.themeProvider,{theme:(()=>{const c=s.useTheme();return m.useMemo(()=>({...c,colors:{...c.colors,background:"#1f1b21",foreground:"white"}}),[c])})(),children:i}),b=({children:i})=>e.cE("div",{className:s.useStyles((()=>{const c=s.useTheme().colors;return{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",paddingLeft:64,paddingRight:64,paddingTop:128,paddingBottom:128,backgroundColor:c.background,color:c.foreground}})(),[]),children:i}),y=({children:i})=>e.cE("div",{className:s.useStyles({fontSize:64,fontVariationSettings:'"wght" 500',textAlign:"center"},[]),children:i}),g=({children:i})=>e.cE("span",{className:s.useStyles({textDecoration:"line-through"},[]),children:i}),l=({children:i})=>e.cE("div",{className:s.useStyles((()=>{const c=s.useTheme().colors;return{display:"grid",gridGap:32,width:"100%",height:"100%",paddingLeft:64,paddingRight:64,paddingTop:128,paddingBottom:128,backgroundColor:c.background,color:c.foreground}})(),[]),children:i}),n=({children:i})=>e.cE("div",{className:s.useStyles({fontSize:64},[]),children:i}),N={space:[0,0,0],size:{maxCodePaneHeight:500}},a=({children:i,small:c})=>e.cE("ul",{className:s.useStyles({display:"grid",gridGap:32,fontSize:c?36:48,margin:0},[c]),children:i}),o=({children:i})=>e.cE("li",[e.cE("div",{className:s.useStyles({display:"grid",gridGap:32},[]),children:i})]),A=({image:i,children:c})=>e.cE("div",{className:s.useStyles({display:"grid",gridAutoFlow:"column",gridGap:32},[])},[c,i]),w=({src:i})=>e.cE("img",{className:s.useStyles({borderRadius:"100%",overflow:"hidden"},[]),src:i}),d=({includeBackground:i,children:c})=>e.cE(s.themeProvider,{theme:(()=>{const r=s.useTheme();return m.useMemo(()=>({...r,colors:{...r.colors,...i?{background:"#f1e8e3"}:{},foreground:"#ff5e00"}}),[r])})(),children:c}),E=({children:i})=>e.cE("div",{className:s.useStyles({fontSize:48},[]),children:i}),C=()=>e.cE("img",{className:s.useStyles({width:36,height:36},[]),src:f.default}),p=({children:i})=>e.cE("div",{className:s.useStyles({display:"flex",alignItems:"center",fontSize:96},[]),children:i}),h=({to:i})=>e.cE("a",{className:s.useStyles({color:"white"},[]),href:i,target:"_blank",rel:"noopener noreferrer",children:i}),x=i=>Array.from({length:i}).map((c,r)=>r);export const presentation=()=>e.cE("div",{className:s.useStyles({fontFamily:"Inter"},[])},[e.cE(t.Deck,{theme:N},[e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{values:x(2),children:(i=-1)=>e.cE(u,[e.cE(b,[e.cE(y,[e.cE("span",["Let's "]),["build",e.cE(g,["build"]),"design"][i+1],e.cE("span",[" a CSS-in-JS library!"])])])])})]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["A little bit about me"]),e.cE(A,{image:e.cE(t.Appear,{elementNum:0},[e.cE(w,{src:S.default})])},[e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Lewis Liu"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["~ 2.5 years of frontend at Brex"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Previously at CircleCI",e.cE(a,[e.cE(o,["Full stack Clojure/ClojureScript"]),e.cE(o,["Recently 🌅 at Brex"])])])])])])])]),e.cE(t.Slide,[e.cE(d,{includeBackground:!0},[e.cE(l,[e.cE(n,["Let's design a CSS-in-JS library!"]),e.cE(t.Appear,{elementNum:0},[e.cE(E,["...but why? 🤔"])])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Background"]),e.cE(t.Appear,{elementNum:0},[e.cE(E,["We use Emotion ",e.cE(C)," for CSS-in-JS"])]),e.cE(a,[e.cE(t.Appear,{elementNum:1},[e.cE(o,["🥇 imported library (not counting React)"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Often treated like a black box"])]),e.cE(t.Appear,{elementNum:3},[e.cE(o,["Best way to demystify: rebuild from first-principles"])])])])]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,["Redesign, not rebuild"])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["How can we improve on Emotion?"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,['Designed in the "pre React hooks era"'])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["Paradigm shift => opportunity for new APIs"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["We're still in an API design gold rush",e.cE(a,[e.cE(o,["Lots of low hanging fruits"])])])])])])]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[4,9],values:[[4,4],[13,13],[4,4],[13,13]],children:([i,c])=>e.cE(l,[e.cE(n,["How can we improve on Emotion?"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
type Props = { visible: boolean }

const SometimesVisible = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary,
  visibility: !visible ? 'hidden' : undefined,
}))

const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  return <SometimesVisible visible={visible} />
}
                `])])})]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,["☠️☠️Forced indirection☠️☠️"])])])]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[],values:[[15,19],[4,8]],children:([i,c])=>e.cE(l,[e.cE(n,["Forced indirection"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
type Props = { visible: boolean }

// We're forced to define this "styled component" as a separate entity
// from the component using it, i.e. extra layer of indirection.
//
// Hence "forced indirection".
const SometimesVisible = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary,
  visibility: !visible ? 'hidden' : undefined,
}))

const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  // All we really wanted was to style a div. 😞
  return <SometimesVisible visible={visible} />
}
                `])])})]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,[`"It's just another variable"`])])])]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[],values:[[4,5],[12,13],[4,5],[4,5],[4,5]],children:([i,c],r)=>e.cE(l,[e.cE(n,["Forced indirection"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},(()=>{const v=["SometimesVisible","SometimesVisible","Wrapper","Container","NotAlwaysVisibleContainer"][r];return[`
type Props = { visible: boolean }

// ${r<=1?"See these awkward names?":"Maybe you'll recognize these?"}
const ${v} = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary
  visibility: !visible ? 'hidden' : undefined,
}))

// ${r<=1?"See these awkward names?":"Maybe you'll recognize these?"}
const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  return <${v} visible={visible} />
}
  `]})())])})]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[],values:[[15,22],[2,6]],children:([i,c])=>e.cE(l,[e.cE(n,["Forced indirection"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
// This type could have been inferred from the only usage if 
// we didn't add this indirection.
//
// This is completely redundant information.
type Props = { visible: boolean }

const SometimesVisible = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary,
  visibility: !visible ? 'hidden' : undefined,
}))

const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  // The only possible type for \`visible\` is boolean.
  // 
  // If we defined the component here, in context, TypeScript 
  // would have been able to infer this.
  return <SometimesVisible visible={visible} />
}
                `])])})]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[],values:[[6,6],[7,12],[11,11],[3,3]],children:([i,c])=>e.cE(l,[e.cE(n,["Emotion's css prop"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div 
      css={({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        color: theme.colors.primary,
        visibility: !visible ? 'hidden' : undefined,
      })} 
    />
  )
}
                `])])})]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(n,["So we're done here?"]),e.cE(t.Appear,{elementNum:0},[e.cE(E,["...not quite 😞"])])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Emotion's css prop"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Not a real runtime API"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["css prop doesn't exist on divs",e.cE(a,[e.cE(o,["babel-plugin-emotion 🎩"]),e.cE(o,["transformed into styled components"])])])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Our code can look like it has less indirection"])])])])]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,["What's not to like?"])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Build-time transformations"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(E,["Limitation: only composable with other build-time transformations"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["No runtime extension/composition"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Write more macros to extend existing macros"])]),e.cE(t.Appear,{elementNum:3},[e.cE(o,["Macros all the way down 🐢 🐢 🐢 🐢"])])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["How can we improve on Emotion?"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Remove/minimize forced indirection"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["No build-time transformations"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Keep similar performance characteristics"])])])])]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,["Let's design a hook!"])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Why a hook?"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Can easily execute side effects on style changes"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["Can skip work on rerender when styles don't change"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Can be called at usage site with no indirection",e.cE(a,[e.cE(o,["Except when rules of hooks are violated",e.cE(a,[e.cE(o,["(Or maybe not!?)"])])])])])])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Let's design a hook!"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Name: useStyles"])]),e.cE(t.Appear,{elementNum:1},[e.cE(o,["Input #1: A style object"])]),e.cE(t.Appear,{elementNum:2},[e.cE(o,["Input #2: A dependency list"])]),e.cE(t.Appear,{elementNum:3},[e.cE(o,["Alternative: Delegate memoization to users"])])])])]),e.cE(t.Slide,[e.cE(l,[e.cE(n,["Let's design useStyles!"]),e.cE(a,[e.cE(t.Appear,{elementNum:0},[e.cE(o,["Output option 1: A className string"])]),e.cE(t.Appear,{elementNum:2},[e.cE(a,[e.cE(o,["Better feature coverage, more complexity"])])]),e.cE(t.Appear,{elementNum:0},[e.cE(o,["Output option 2: A style object"])]),e.cE(t.Appear,{elementNum:1},[e.cE(a,[e.cE(o,["Inline styles have limitations"])])])])])]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[9,19],values:[[8,8],[4,5]],children:([i,c])=>e.cE(l,[e.cE(n,["Let's try useStyles!"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  // No need to couple theming to styling API, users can store theme values in any context or state management solution they're already using!
  const theme = useContext(themeContext)

  return (
    <div
      // No indirection, can call directly where styles are needed
      className={useStyles(
        {
          display: "flex",
          justifyContent: "center",
          color: theme.colors.primary,
          visibility: !visible ? "hidden" : undefined,
        },
        // Users can explicitly specify when styles should be recomputed based on data dependencies
        [theme.colors.primary, visible],
      )}
    />
  )
}
                `])])})]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[30,31],values:[[4,5],[5,25],[20,21]],children:([i,c])=>e.cE(l,[e.cE(n,["Let's try useStyles!"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
type Props = { visible: boolean }

// What used to be a "styled component" becomes just another component, no more implicit prop drilling, auto-injected props, or special purpose APIs
const SometimesVisible = ({ visible }: Props) => {
  const theme = useContext(themeContext)

  return (
    <div
      // Easy to intuit runtime behavior from usage, hides very little inner workings compared to the black box that is styled.div
      className={useStyles(
        {
          display: "flex",
          justifyContent: "center",
          color: theme.colors.primary,
          visibility: !visible ? "hidden" : undefined,
        },
        [theme.colors.primary, visible],
      )}
      // Only props that are explicitly passed to the underlying element get applied
      // See source for @emotion/is-prop-valid to contrast
    />
  )
}

const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)

  // Trivial to add extra indirection when actually desired, just by extracting out to regular reusable components
  return <SometimesVisible visible={visible} />
}
                `])])})]),e.cE(t.Slide,[e.cE("div"),e.cE(t.Stepper,{defaultValue:[19,30],values:[[2,17]],children:([i,c])=>e.cE(l,[e.cE(n,["Let's try useStyles!"]),e.cE(t.CodePane,{highlightStart:i,highlightEnd:c,autoFillHeight:!0,fontSize:26,indentSize:1},[`
// Users can build any abstraction they want on top, including the styled API from emotion
const styled = {
  // Can map over list of html elements at runtime to replicate the entire styled API, not actually possible with the css prop
  div: <Props>(styles) => (props: Props) =>  {
    const theme = useContext(themeContext)
    return (
      <div 
        {...props}
        className={useStyles(
          styles({ ...props, theme }), 
          [theme, ...Object.values(props)]
        )}
      />
    )
  }
}

// Usage is identical as earlier styled.div code sample
const SometimesVisible = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary,
  visibility: !visible ? 'hidden' : undefined,
}))

const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  return <SometimesVisible visible={visible} />
}
                `])])})]),e.cE(t.Slide,[e.cE(d,[e.cE(l,[e.cE(p,["Takeaways"])])])]),e.cE(t.Slide,[e.cE(u,[e.cE(l,[e.cE(b,[e.cE(y,['"We shape our tools, and thereafter they shape us"'])])])])]),e.cE(t.Slide,[e.cE(u,[e.cE(l,[e.cE(b,[e.cE(y,['"Our tools annoyed us, and thereafter we built better tools"'])])])])]),e.cE(t.Slide,[e.cE(u,[e.cE(l,[e.cE(n,["Questions?"]),e.cE(a,{small:!0},[e.cE(o,[e.cE("span",["Slides: ",e.cE(h,{to:"https://build-a-css-in-js-library.lewisl.dev/"})])]),e.cE(o,[e.cE("span",["Code: ",e.cE(h,{to:"https://github.com/lewisl9029/build-a-css-in-js-library"})])]),e.cE(o,[e.cE("span",["Library: ",e.cE(h,{to:"https://github.com/lewisl9029/use-styles"})])]),e.cE(o,[e.cE("span",["Bonus (minimizing forced indirection caused by rules of hooks): ",e.cE(h,{to:"https://github.com/lewisl9029/render-hooks"})])])])])])])])]);
