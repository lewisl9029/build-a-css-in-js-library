import * as react_ from 'react'
import * as spectacle_ from 'spectacle'
import * as a_ from 'public/a_'
import * as emotion_ from 'public/assets/emotion.webp'
import * as photo_ from 'public/assets/photo.jpg'
import * as component_ from 'public/lib/component_'
import * as style_ from 'public/lib/style_'

const bold = ({ children }) =>
  a_.cE(style_.themeProvider, {
    theme: (() => {
      const theme = style_.useTheme()
      return react_.useMemo(
        () => ({
          ...theme,
          colors: {
            ...theme.colors,
            background: '#1f1b21',
            foreground: 'white',
          },
        }),
        [theme],
      )
    })(),
    children,
  })

const titleSlide = ({ children }) =>
  a_.cE('div', {
    className: (() => {
      const colors = style_.useTheme().colors
      return style_.useStyles(
        {
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 64,
          paddingRight: 64,
          paddingTop: 128,
          paddingBottom: 128,
          backgroundColor: colors.background,
          color: colors.foreground,
        },
        [colors],
      )
    })(),
    children,
  })

const title = ({ children }) =>
  a_.cE('div', {
    className: style_.useStyles(
      {
        fontSize: 64,
        fontVariationSettings: '"wght" 500',
        textAlign: 'center',
      },
      [],
    ),
    children,
  })

const strike = ({ children }) =>
  a_.cE('span', {
    className: style_.useStyles({ textDecoration: 'line-through' }, []),
    children,
  })

const slide = ({ children }) =>
  a_.cE('div', {
    className: (() => {
      const colors = style_.useTheme().colors
      return style_.useStyles(
        {
          display: 'grid',
          gridGap: 32,
          width: '100%',
          height: '100%',
          paddingLeft: 64,
          paddingRight: 64,
          paddingTop: 128,
          paddingBottom: 128,
          backgroundColor: colors.background,
          color: colors.foreground,
        },
        [colors],
      )
    })(),
    children,
  })

const heading = ({ children }) =>
  a_.cE('div', {
    className: style_.useStyles({ fontSize: 64 }, []),
    children,
  })

const theme = {
  // override default theme
  space: [0, 0, 0],
  size: {
    maxCodePaneHeight: 500,
  },
}

const list = ({ children, small }) =>
  a_.cE('ul', {
    className: style_.useStyles(
      { display: 'grid', gridGap: 32, fontSize: small ? 36 : 48, margin: 0 },
      [small],
    ),
    children,
  })

const item = ({ onClick, children }) =>
  a_.cE('li', [
    a_.cE('div', {
      onClick,
      className: style_.useStyles({ display: 'grid', gridGap: 32 }, []),
      children,
    }),
  ])

const imageLayout = ({ image, children }) =>
  a_.cE(
    'div',
    {
      className: style_.useStyles(
        { display: 'grid', gridAutoFlow: 'column', gridGap: 32 },
        [],
      ),
    },
    [children, image],
  )

const image = ({ src }) =>
  a_.cE('img', {
    className: style_.useStyles(
      { borderRadius: '100%', overflow: 'hidden' },
      [],
    ),
    src,
  })

const branded = ({ includeBackground, children }) =>
  a_.cE(style_.themeProvider, {
    theme: (() => {
      const theme = style_.useTheme()
      return react_.useMemo(
        () => ({
          ...theme,
          colors: {
            ...theme.colors,
            ...(includeBackground ? { background: '#f1e8e3' } : {}),
            foreground: '#ff5e00',
          },
        }),
        [theme],
      )
    })(),
    children,
  })

const subHeading = ({ children }) =>
  a_.cE('div', {
    className: style_.useStyles({ fontSize: 48 }, []),
    children,
  })

const emotion = () =>
  a_.cE('img', {
    className: style_.useStyles({ width: 36, height: 36 }, []),
    src: emotion_.default,
  })

const highlight = ({ children }) =>
  a_.cE('div', {
    className: style_.useStyles(
      { display: 'flex', alignItems: 'center', fontSize: 96 },
      [],
    ),
    children,
  })

const link = ({ to }) =>
  a_.cE('a', {
    className: style_.useStyles({ color: 'white' }, []),
    href: to,
    target: '_blank',
    rel: 'noopener noreferrer',
    children: to,
  })

const range = (length) => Array.from({ length }).map((_value, index) => index)

export const presentation = () =>
  a_.cE('div', { className: style_.useStyles({ fontFamily: 'Inter' }, []) }, [
    a_.cE(
      spectacle_.Deck,
      {
        theme,
        transitionEffect: 'none',
      },
      [
        // can't compose this because Deck searches children
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          // can't compose this because Slide also searches children... this API stinks
          a_.cE(spectacle_.Stepper, {
            values: range(2),
            // account for initial undefined step
            children: (index = -1) =>
              a_.cE(bold, [
                a_.cE(titleSlide, [
                  a_.cE(title, [
                    a_.cE('span', ["Let's "]),
                    // framer motion here?
                    ['build', a_.cE(strike, ['build']), 'design'][index + 1],
                    a_.cE('span', [' a CSS-in-JS library!']),
                  ]),
                ]),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, ['A little bit about me']),
            a_.cE(
              imageLayout,
              {
                image: a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                  a_.cE(image, { src: photo_.default }),
                ]),
              },
              [
                a_.cE(list, [
                  a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                    a_.cE(item, ['Lewis Liu']),
                  ]),
                  a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                    a_.cE(item, ['~ 2.5 years of frontend at Brex']),
                  ]),
                  a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                    a_.cE(item, [
                      'Previously at CircleCI',
                      a_.cE(list, [
                        a_.cE(item, ['Full stack Clojure/ClojureScript']),
                        a_.cE(item, ['Recently 🌅 at Brex']),
                      ]),
                    ]),
                  ]),
                ]),
              ],
            ),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, { includeBackground: true }, [
            a_.cE(slide, [
              a_.cE(heading, [`Let's design a CSS-in-JS library!`]),
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(subHeading, ['...but why? 🤔']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, ['Background']),
            a_.cE(spectacle_.Appear, { elementNum: 0 }, [
              a_.cE(subHeading, [
                'We use Emotion ',
                a_.cE(emotion),
                ' for CSS-in-JS',
              ]),
            ]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, [`🥇 imported library (not counting React)`]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, ['Often treated like a black box']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 3 }, [
                a_.cE(item, [
                  'Best way to demystify: rebuild from first-principles',
                ]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [a_.cE(highlight, [`Redesign, not rebuild`])]),
          ]),
        ]),
        // a_.cE(spectacle_.Slide, [
        //   a_.cE(slide, [
        //     a_.cE(heading, [`How can we improve on Emotion?`]),
        //     a_.cE(list, [
        //       a_.cE(spectacle_.Appear, { elementNum: 0 }, [
        //         a_.cE(item, [`styled-components?`]),
        //       ]),
        //       a_.cE(spectacle_.Appear, { elementNum: 1 }, [
        //         a_.cE(item, [`Started out very different`]),
        //       ]),
        //       a_.cE(spectacle_.Appear, { elementNum: 2 }, [
        //         a_.cE(item, [`Converged to practically the same API`]),
        //       ]),
        //     ]),
        //   ]),
        // ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`How can we improve on Emotion?`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, [`Designed in the "pre React hooks era"`]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, [`Paradigm shift => opportunity for new APIs`]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, [
                  `We're still in an API design gold rush`,
                  a_.cE(list, [a_.cE(item, [`Lots of low hanging fruits`])]),
                ]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [4, 9],
            values: [
              [4, 4],
              [13, 13],
              [4, 4],
              [13, 13],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`How can we improve on Emotion?`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [a_.cE(highlight, [`☠️☠️Forced indirection☠️☠️`])]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [],
            values: [
              [15, 19],
              [4, 8],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Forced indirection`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [a_.cE(highlight, [`"It's just another variable"`])]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [],
            values: [
              [4, 5],
              [12, 13],
              [4, 5],
              [4, 5],
              [4, 5],
            ],
            children: ([highlightStart, highlightEnd], step) =>
              a_.cE(slide, [
                a_.cE(heading, [`Forced indirection`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  (() => {
                    const awkwardName =
                      [
                        'SometimesVisible',
                        'SometimesVisible',
                        'Wrapper',
                        'Container',
                        'NotAlwaysVisibleContainer',
                      ][step] || 'SometimesVisible'
                    return [
                      `
type Props = { visible: boolean }

// ${step <= 1 ? 'See these awkward names?' : "Maybe you'll recognize these?"}
const ${awkwardName} = styled.div<Props>(({ theme, visible }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.primary
  visibility: !visible ? 'hidden' : undefined,
}))

// ${step <= 1 ? 'See these awkward names?' : "Maybe you'll recognize these?"}
const NotAlwaysVisible = () => {
  const [visible, setVisible] = useState<boolean>(true)
  return <${awkwardName} visible={visible} />
}
  `,
                    ]
                  })(),
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [],
            values: [
              [15, 22],
              [2, 6],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Forced indirection`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [],
            values: [
              [6, 6],
              [7, 12],
              [11, 11],
              [3, 3],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Emotion's css prop`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [
              a_.cE(heading, [`So we're done here?`]),
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(subHeading, ['...not quite 😞']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`Emotion's css prop`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, ['Not a real runtime API']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, [
                  `css prop doesn't exist on divs`,
                  a_.cE(list, [
                    a_.cE(item, ['babel-plugin-emotion 🎩']),
                    a_.cE(item, ['transformed into styled components']),
                  ]),
                ]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, ['Our code can look like it has less indirection']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [a_.cE(highlight, [`What's not to like?`])]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`Build-time transformations`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(subHeading, [
                  'Limitation: only composable with other build-time transformations',
                ]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, ['No runtime extension/composition']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, ['Write more macros to extend existing macros']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 3 }, [
                a_.cE(item, ['Macros all the way down 🐢 🐢 🐢 🐢']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`How can we improve on Emotion?`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, ['Remove/minimize forced indirection']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, ['No build-time transformations']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, ['Keep similar performance characteristics']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [
            a_.cE(slide, [a_.cE(highlight, [`Let's design a hook!`])]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`Why a hook?`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, [
                  'Can easily execute side effects on style changes',
                ]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, [
                  `Can skip work on rerender when styles don't change`,
                ]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, [
                  `Can be called at usage site with no indirection`,
                  a_.cE(list, [
                    a_.cE(item, [
                      'Except when rules of hooks are violated',
                      a_.cE(list, [a_.cE(item, ['(Or maybe not!?)'])]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`Let's design a hook!`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, ['Name: useStyles']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(item, ['Input #1: A style object']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(item, ['Input #2: A dependency list']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 3 }, [
                a_.cE(item, ['Alternative: Delegate memoization to users']),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(slide, [
            a_.cE(heading, [`Let's design useStyles!`]),
            a_.cE(list, [
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, ['Output option 1: A className string']),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 2 }, [
                a_.cE(list, [
                  a_.cE(item, ['Better feature coverage, more complexity']),
                ]),
              ]),
              a_.cE(spectacle_.Appear, { elementNum: 0 }, [
                a_.cE(item, ['Output option 2: A style object']),
              ]),
              // a_.cE(spectacle_.Appear, { elementNum: 1 }, [
              //   a_.cE(list, [a_.cE(item, ['Basically a glorified useMemo'])]),
              // ]),
              a_.cE(spectacle_.Appear, { elementNum: 1 }, [
                a_.cE(list, [a_.cE(item, ['Inline styles have limitations'])]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [9, 19],
            values: [
              [8, 8],
              [4, 5],
              // [11, 11],
              // [3, 3],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Let's try useStyles!`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [30, 31],
            values: [
              [4, 5],
              [5, 25],
              [20, 21],
              // [11, 11],
              // [3, 3],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Let's try useStyles!`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          // possible spectacle bug, steppers don't activate unless there's at least 1 other element
          a_.cE('div'),
          a_.cE(spectacle_.Stepper, {
            defaultValue: [19, 30],
            values: [
              [2, 17],
              // [7, 12],
              // [11, 11],
              // [3, 3],
            ],
            children: ([highlightStart, highlightEnd]) =>
              a_.cE(slide, [
                a_.cE(heading, [`Let's try useStyles!`]),
                a_.cE(
                  spectacle_.CodePane,
                  {
                    highlightStart,
                    highlightEnd,
                    autoFillHeight: true,
                    fontSize: 26,
                    indentSize: 1,
                  },
                  [
                    `
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
                `,
                  ],
                ),
              ]),
          }),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(branded, [a_.cE(slide, [a_.cE(highlight, [`Takeaways`])])]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(bold, [
            a_.cE(slide, [
              a_.cE(titleSlide, [
                a_.cE(title, [
                  `"We shape our tools, and thereafter they shape us"`,
                ]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(bold, [
            a_.cE(slide, [
              a_.cE(titleSlide, [
                a_.cE(title, [
                  `"Our tools annoyed us, and thereafter we built better tools"`,
                ]),
              ]),
            ]),
          ]),
        ]),
        a_.cE(spectacle_.Slide, [
          a_.cE(bold, [
            a_.cE(slide, [
              a_.cE(heading, [`Questions?`]),
              a_.cE(list, { small: true }, [
                a_.cE(item, [
                  a_.cE('span', [
                    `Slides: `,
                    a_.cE(link, {
                      to: 'https://build-a-css-in-js-library.lewisl.dev/',
                    }),
                  ]),
                ]),
                a_.cE(item, [
                  a_.cE('span', [
                    `Code: `,
                    a_.cE(link, {
                      to:
                        'https://github.com/lewisl9029/build-a-css-in-js-library',
                    }),
                  ]),
                ]),
                a_.cE(item, [
                  a_.cE('span', [
                    `Library: `,
                    a_.cE(link, {
                      to: 'https://github.com/lewisl9029/use-styles',
                    }),
                  ]),
                ]),
                a_.cE(item, [
                  a_.cE('span', [
                    `Bonus (minimizing forced indirection caused by rules of hooks): `,
                    a_.cE(link, {
                      to: 'https://github.com/lewisl9029/render-hooks',
                    }),
                  ]),
                ]),
                a_.cE(component_.hooks, {
                  children: () =>
                    a_.cE(
                      item,
                      {
                        onClick: style_.useGoDark(),
                      },
                      [
                        style_.useGoneDark()
                          ? 'Nothing happened? Try going back to previous slides'
                          : 'Click here to GO DARK',
                      ],
                    ),
                }),
              ]),
            ]),
          ]),
        ]),
      ],
    ),
  ])
