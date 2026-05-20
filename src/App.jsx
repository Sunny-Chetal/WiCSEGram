import { useState } from 'react'
import './App.css'

const categories = [
  {
    name: '♡ Girl Talk ♡',
    description: 'spill the tea, intros, & all things bestie ✿',
    forums: [
      {
        title: 'Welcome Lounge ✧˖°',
        blurb: 'new here? sign the guestbook and say hi bbg!',
        topics: 1428,
        posts: 9821,
        lastPost: {
          title: 'Re: first time poster, long time lurker (´• ω •`) ♡',
          author: 'pixelKitty92',
          when: '12 min ago',
        },
        threadList: [
          {
            id: 1,
            title: 'first time poster, long time lurker (´• ω •`) ♡',
            author: 'pixelKitty92',
            replies: 47,
            views: 892,
            lastPost: '12 min ago',
            posts: [
              { author: 'pixelKitty92', time: '12 min ago', content: "hi everyone!! i've been lurking since like 2003 and finally made an account ♡ i love this site so much, it gives me so many good vibes. i'm into anime, pixel art, and collecting lil figurines. hope to make some friends here!!" },
              { author: 'sparklezbabe', time: '10 min ago', content: 'omg welcome bestie!! ✿ we\'re so glad u finally posted! what kind of pixel art do u make?' },
              { author: 'butterflyclip', time: '8 min ago', content: 'yayyy another pixel art lover!! u should post ur stuff in the Graphics section!!' },
            ],
          },
          {
            id: 2,
            title: 'hi!!! my name is brii and im new here ♡',
            author: 'brii_xoxo',
            replies: 23,
            views: 445,
            lastPost: '1 hr ago',
            posts: [
              { author: 'brii_xoxo', time: '1 hr ago', content: "heeey!! my name is brianna but everyone calls me brii ♡ found this site from my friend cherry_xoxo and im obsessed already omg" },
              { author: 'cherry_xoxo', time: '58 min ago', content: 'BRII UR HERE YAYY ♡♡♡ i told u ud love it!!' },
            ],
          },
          {
            id: 3,
            title: 'guestbook signatures — post ur blinkies here! ✧',
            author: 'glitterboi',
            replies: 156,
            views: 3201,
            lastPost: '3 hr ago',
            posts: [
              { author: 'glitterboi', time: '3 hr ago', content: 'ok so i made this thread for everyone to share their sig/blinkie combos!! post ur current sig below and we can rate each other ✿' },
            ],
          },
          {
            id: 4,
            title: "who else is online rn?? it's so late lol",
            author: 'midnight_rose',
            replies: 88,
            views: 1104,
            lastPost: 'yesterday',
            posts: [
              { author: 'midnight_rose', time: 'yesterday', content: 'its 2am and i should sleep but instead im here lmaooo anyone else up?? ♡' },
              { author: 'bubblegum.bb', time: 'yesterday', content: 'SAME i have school tomorrow too oops' },
            ],
          },
        ],
      },
      {
        title: 'The Slumber Party ☆',
        blurb: 'late night convos, crushes, gossip & moodboards.',
        topics: 3104,
        posts: 28471,
        lastPost: {
          title: 'Re: what song is in ur away message rn??',
          author: 'sparklezbabe',
          when: '34 min ago',
        },
        threadList: [
          {
            id: 5,
            title: 'what song is in ur away message rn??',
            author: 'sparklezbabe',
            replies: 201,
            views: 4832,
            lastPost: '34 min ago',
            posts: [
              { author: 'sparklezbabe', time: '34 min ago', content: 'mine is "complicated" by avril lavigne rn bestie era ♡' },
              { author: 'pixelKitty92', time: '30 min ago', content: '"sk8er boi" obvs, i\'m having a moment lol' },
              { author: 'butterflyclip', time: '25 min ago', content: '"toxic" by britney spears im not ashamed' },
            ],
          },
          {
            id: 6,
            title: 'rate my crush irl (anonymous poll inside)',
            author: 'cherry_xoxo',
            replies: 94,
            views: 2201,
            lastPost: '2 hr ago',
            posts: [
              { author: 'cherry_xoxo', time: '2 hr ago', content: 'ok so there\'s this guy in my math class and he borrowed my pencil and smiled at me what does it mean??? help' },
              { author: 'sparklezbabe', time: '1 hr 55 min ago', content: 'BESTIE HE LIKES U go talk to him!!!!' },
            ],
          },
          {
            id: 7,
            title: 'make a moodboard for ur dream bedroom ✿',
            author: 'frostedfaerie',
            replies: 312,
            views: 7809,
            lastPost: '5 hr ago',
            posts: [
              { author: 'frostedfaerie', time: '5 hr ago', content: 'post ur dream bedroom inspo!! mine: fairy lights everywhere, pink walls, loft bed, lots of stuffed animals and a vanity with a big mirror 🌙✨' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: '✿ Beauty & Fashion ✿',
    description: 'glitter gel, butterfly clips, juicy tracksuits — show it off',
    forums: [
      {
        title: 'Outfit of the Day ♡',
        blurb: 'low-rise, layered tanks, baby tees… post fits!',
        topics: 842,
        posts: 6233,
        lastPost: {
          title: 'Re: rate my mall outfit pls!! ✩₊˚',
          author: 'butterflyclip',
          when: '2 hr ago',
        },
        threadList: [
          {
            id: 8,
            title: 'rate my mall outfit pls!! ✩₊˚',
            author: 'butterflyclip',
            replies: 67,
            views: 1203,
            lastPost: '2 hr ago',
            posts: [
              { author: 'butterflyclip', time: '2 hr ago', content: 'ok so i wore: white baby tee, low rise flare jeans, platform sandals, and my fave butterfly clip collection in my hair ♡ it was SO cute trust' },
              { author: 'frostedfaerie', time: '1 hr 50 min ago', content: '10/10 obsessed!!! that sounds iconic' },
            ],
          },
          {
            id: 9,
            title: 'best stores at the mall rn?? rank them',
            author: 'sparklezbabe',
            replies: 88,
            views: 1890,
            lastPost: '4 hr ago',
            posts: [
              { author: 'sparklezbabe', time: '4 hr ago', content: "ok ranking the mall stores: 1. hot topic 2. claire's 3. delia*s 4. wet seal. fight me" },
              { author: 'butterflyclip', time: '3 hr 55 min ago', content: "CLAIRE'S NUMBER ONE NO DEBATE" },
            ],
          },
        ],
      },
      {
        title: 'Lip Gloss Lab ☆',
        blurb: 'drugstore hauls, frosted eyeshadow tutorials & more.',
        topics: 511,
        posts: 4097,
        lastPost: {
          title: 'Re: lip smackers tier list (final answer)',
          author: 'frostedfaerie',
          when: '5 hr ago',
        },
        threadList: [
          {
            id: 10,
            title: 'lip smackers tier list (final answer)',
            author: 'frostedfaerie',
            replies: 143,
            views: 3421,
            lastPost: '5 hr ago',
            posts: [
              { author: 'frostedfaerie', time: '5 hr ago', content: 'S tier: strawberry, cotton candy, watermelon. A tier: vanilla, bubblegum. B tier: root beer. everything else is a lie. this is the law.' },
              { author: 'sparklezbabe', time: '4 hr 45 min ago', content: 'ROOT BEER IN B TIER???? we need to talk' },
            ],
          },
          {
            id: 11,
            title: 'my drugstore haul from today!! ✿',
            author: 'cherry_xoxo',
            replies: 34,
            views: 788,
            lastPost: '8 hr ago',
            posts: [
              { author: 'cherry_xoxo', time: '8 hr ago', content: 'got: maybelline lip gloss in baby pink, wet n wild sparkle eyeshadow, and a new butterfly clip set ♡ spent $12 total i\'m thriving' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: '✧ Web Diary ✧',
    description: 'fan sites, blog rings, sig swaps, & all things HTML',
    forums: [
      {
        title: 'Pixel Art & Graphics ♡',
        blurb: 'dollz, blinkies, userbars, glitter texts!',
        topics: 1290,
        posts: 11402,
        lastPost: {
          title: 'Re: new pink blinkie collection — link inside!',
          author: 'glitterboi',
          when: 'yesterday',
        },
        threadList: [
          {
            id: 12,
            title: 'new pink blinkie collection — link inside!',
            author: 'glitterboi',
            replies: 89,
            views: 2341,
            lastPost: 'yesterday',
            posts: [
              { author: 'glitterboi', time: 'yesterday', content: "hi girlies!! i made a new set of pink blinkies for anyone to use ♡ they have little stars and hearts and say things like 'cutie' and 'bestie' and '2cute4u'. totally free to use just credit me pls!!" },
              { author: 'butterflyclip', time: 'yesterday', content: 'GLITTER BOI THESE ARE SO CUTE omg thank u!!' },
            ],
          },
          {
            id: 13,
            title: 'dollz base sharing thread ✿',
            author: 'pixelKitty92',
            replies: 201,
            views: 5603,
            lastPost: '2 days ago',
            posts: [
              { author: 'pixelKitty92', time: '2 days ago', content: 'sharing some cute dollz bases i made!! feel free to dress them up and post what u make ✿' },
            ],
          },
        ],
      },
      {
        title: 'HTML Help Desk ☆',
        blurb: '<marquee> not working? lemme help bestie!',
        topics: 376,
        posts: 2811,
        lastPost: {
          title: 'Re: how do i make my cursor sparkle??',
          author: 'midnight_rose',
          when: '2 days ago',
        },
        threadList: [
          {
            id: 14,
            title: 'how do i make my cursor sparkle??',
            author: 'midnight_rose',
            replies: 23,
            views: 445,
            lastPost: '2 days ago',
            posts: [
              { author: 'midnight_rose', time: '2 days ago', content: "hiii!! i want my cursor to leave sparkle trails like on other sites i've seen. how do i do this?? i tried googling but i cant figure it out" },
              { author: 'glitterboi', time: '2 days ago', content: "u need a javascript snippet! copy this into ur <head> tag... it should make ur cursor sparkly!! ♡" },
              { author: 'midnight_rose', time: '2 days ago', content: 'OH MY GOD IT WORKED THANK U SO MUCH ✿✿✿' },
            ],
          },
          {
            id: 15,
            title: 'marquee help!! mine goes too fast',
            author: 'brii_xoxo',
            replies: 8,
            views: 112,
            lastPost: '3 days ago',
            posts: [
              { author: 'brii_xoxo', time: '3 days ago', content: 'my marquee is scrolling super fast and i want it slower!! how do i control the speed??' },
              { author: 'glitterboi', time: '3 days ago', content: 'add scrollamount="2" to ur marquee tag! the lower the number the slower it goes ♡' },
            ],
          },
        ],
      },
    ],
  },
]

const allMembers = [
  { name: 'pixelKitty92', joined: 'Jan 2002', posts: 4821, title: 'Forum Regular ♡' },
  { name: 'sparklezbabe', joined: 'Mar 2001', posts: 9204, title: 'Super Poster ✧' },
  { name: 'butterflyclip', joined: 'Sep 2002', posts: 2341, title: 'Member ☆' },
  { name: 'frostedfaerie', joined: 'Jul 2001', posts: 6782, title: 'Senior Member ✿' },
  { name: 'glitterboi', joined: 'Nov 2001', posts: 11203, title: 'Pixel Master ♡' },
  { name: 'midnight_rose', joined: 'Apr 2003', posts: 1892, title: 'Member ☆' },
  { name: 'cherry_xoxo', joined: 'Feb 2002', posts: 3401, title: 'Forum Regular ♡' },
  { name: 'bubblegum.bb', joined: 'Aug 2003', posts: 892, title: 'Newbie ✧' },
  { name: 'cybercafe_kid', joined: 'May 2026', posts: 3, title: 'Newbie ✧' },
  { name: 'brii_xoxo', joined: 'May 2026', posts: 12, title: 'Newbie ✧' },
  { name: 'stardust_girl', joined: 'Oct 2002', posts: 5129, title: 'Senior Member ✿' },
  { name: 'neon_angel', joined: 'Jun 2001', posts: 7843, title: 'Super Poster ✧' },
]

const helpFAQ = [
  {
    q: 'how do i make an account??',
    a: "click \"sign up\" in the top nav! fill in ur username, email, and password. u'll get a confirmation email. make sure to check ur spam folder bestie ♡",
  },
  {
    q: 'how do i change my avatar??',
    a: 'go to ur profile page → edit profile → upload avatar! we support jpg, gif, and png up to 100kb. animated gifs are totally allowed!! ✿',
  },
  {
    q: 'can i use HTML in my posts??',
    a: 'yes!! we support basic HTML tags like <b>, <i>, <marquee>, and <font>. css and javascript are not allowed in posts for security reasons but u can use it in ur profile page!',
  },
  {
    q: 'how do i report a post??',
    a: 'click the little ♡ flag icon on any post to report it to the mods. they\'ll review it within 24 hours ✦',
  },
  {
    q: 'what are the forum rules??',
    a: "be kind, no spam, no drama, no posting anyone's personal info. full rules are in the Welcome Lounge pinned post. tl;dr: be a good bestie ♡",
  },
]

const onlineUsers = [
  'pixelKitty92',
  'sparklezbabe',
  'butterflyclip',
  'frostedfaerie',
  'glitterboi',
  'midnight_rose',
  'cherry_xoxo',
  'bubblegum.bb',
]

const initialShouts = [
  { author: 'sparklezbabe', text: 'brb mom needs the phone line!! 📞' },
  { author: 'pixelKitty92', text: 'anyone got a cute midi for my page?? ♡' },
  { author: 'glitterboi', text: 'new sig is up, lmk what u think (´• ω •`)' },
  { author: 'butterflyclip', text: "don't forget to sign my guestbook! ✿" },
  { author: 'cherry_xoxo', text: "who's going to the mall this weekend? 🛍" },
]

const initialPollVotes = { Strawberry: 420, 'Cotton Candy': 280, Vanilla: 180, Bubblegum: 120 }

function App() {
  const [page, setPage] = useState('home')
  const [search, setSearch] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [shouts, setShouts] = useState(initialShouts)
  const [shoutInput, setShoutInput] = useState('')
  const [pollVotes, setPollVotes] = useState(initialPollVotes)
  const [hasVoted, setHasVoted] = useState(false)
  const [currentForum, setCurrentForum] = useState(null)
  const [currentThread, setCurrentThread] = useState(null)
  const [modal, setModal] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' })
  const [openFAQ, setOpenFAQ] = useState(null)
  const [replyInput, setReplyInput] = useState('')

  const totalTopics = categories.reduce(
    (sum, c) => sum + c.forums.reduce((s, f) => s + f.topics, 0),
    0,
  )
  const totalPosts = categories.reduce(
    (sum, c) => sum + c.forums.reduce((s, f) => s + f.posts, 0),
    0,
  )
  const totalPollVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0)

  function navigate(p) {
    setPage(p)
    setCurrentForum(null)
    setCurrentThread(null)
    setModal(null)
  }

  function openForum(forum) {
    setCurrentForum(forum)
    setCurrentThread(null)
    setPage('forum')
  }

  function openThread(thread, forum) {
    if (forum) setCurrentForum(forum)
    setCurrentThread({ ...thread, posts: [...thread.posts] })
    setReplyInput('')
    setPage('thread')
  }

  function handleSearch() {
    if (!search.trim()) return
    setSearchQuery(search.trim())
    setPage('search')
  }

  function handleShout() {
    if (!shoutInput.trim()) return
    const author = loggedIn ? currentUser : 'Guest'
    setShouts([...shouts, { author, text: shoutInput.trim() }])
    setShoutInput('')
  }

  function handleVote(option) {
    if (hasVoted) return
    setPollVotes({ ...pollVotes, [option]: pollVotes[option] + 1 })
    setHasVoted(true)
  }

  function handleLogin(e) {
    e.preventDefault()
    if (!loginForm.username.trim()) return
    setLoggedIn(true)
    setCurrentUser(loginForm.username.trim())
    setLoginForm({ username: '', password: '' })
    setModal(null)
  }

  function handleRegister(e) {
    e.preventDefault()
    if (!registerForm.username.trim()) return
    setLoggedIn(true)
    setCurrentUser(registerForm.username.trim())
    setRegisterForm({ username: '', email: '', password: '' })
    setModal(null)
  }

  function handleLogout() {
    setLoggedIn(false)
    setCurrentUser('')
  }

  function handleReply() {
    if (!replyInput.trim() || !currentThread) return
    const author = loggedIn ? currentUser : 'Guest'
    const newPost = { author, time: 'just now', content: replyInput.trim() }
    setCurrentThread({ ...currentThread, posts: [...currentThread.posts, newPost] })
    setReplyInput('')
  }

  const searchResults = searchQuery
    ? categories.flatMap((c) =>
        c.forums.flatMap((f) =>
          f.threadList
            .filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((t) => ({ ...t, forumTitle: f.title, forum: f })),
        ),
      )
    : []

  let mainContent

  if (page === 'home' || (page === 'forum' && !currentForum)) {
    mainContent = (
      <>
        <div className="searchbar">
          <label htmlFor="q">✧ search the boards ✧</label>
          <input
            id="q"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="type something cute..."
          />
          <button type="button" className="btn" onClick={handleSearch}>
            Go! ♡
          </button>
        </div>

        {categories.map((cat) => (
          <section key={cat.name} className="category">
            <div className="category-header">
              <h2>{cat.name}</h2>
              <span className="category-desc">{cat.description}</span>
            </div>
            <table className="forum-table">
              <thead>
                <tr>
                  <th className="col-status"></th>
                  <th className="col-forum">Forum</th>
                  <th className="col-num">Topics</th>
                  <th className="col-num">Posts</th>
                  <th className="col-last">Last Post</th>
                </tr>
              </thead>
              <tbody>
                {cat.forums.map((f) => (
                  <tr key={f.title}>
                    <td className="col-status">
                      <span className="folder" title="new posts">
                        ♡
                      </span>
                    </td>
                    <td className="col-forum">
                      <button className="forum-title link-btn" onClick={() => openForum(f)}>
                        {f.title}
                      </button>
                      <div className="forum-blurb">{f.blurb}</div>
                    </td>
                    <td className="col-num">{f.topics.toLocaleString()}</td>
                    <td className="col-num">{f.posts.toLocaleString()}</td>
                    <td className="col-last">
                      <div className="last-title">{f.lastPost.title}</div>
                      <div className="last-meta">
                        by{' '}
                        <button className="link-btn" onClick={() => navigate('members')}>
                          {f.lastPost.author}
                        </button>
                        <br />
                        <em>{f.lastPost.when}</em>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}

        <section className="stats-box">
          <h3>♡ ⋆｡˚ Board Stats ˚｡⋆ ♡</h3>
          <p>
            our members have posted{' '}
            <strong>{totalPosts.toLocaleString()}</strong> totally cute messages across{' '}
            <strong>{totalTopics.toLocaleString()}</strong> topics ✿
          </p>
          <p>
            we have <strong>12,847</strong> registered besties. say hi to our newest member,{' '}
            <button className="link-btn" onClick={() => navigate('members')}>
              cybercafe_kid
            </button>
            ! ♡
          </p>
          <p>
            most cuties ever online: <strong>1,337</strong> on 04/14/2003 ✧
          </p>
        </section>
      </>
    )
  } else if (page === 'forum' && currentForum) {
    mainContent = (
      <section className="forum-detail">
        <div className="breadcrumb">
          <button className="link-btn" onClick={() => navigate('home')}>Home</button>
          {' › '}
          <span>{currentForum.title}</span>
        </div>
        <div className="category-header page-category-header">
          <h2>{currentForum.title}</h2>
          <span className="category-desc">{currentForum.blurb}</span>
        </div>
        <table className="forum-table">
          <thead>
            <tr>
              <th className="col-status"></th>
              <th className="col-forum">Topic</th>
              <th className="col-num">Replies</th>
              <th className="col-num">Views</th>
              <th className="col-last">Last Post</th>
            </tr>
          </thead>
          <tbody>
            {currentForum.threadList.map((t) => (
              <tr key={t.id}>
                <td className="col-status">
                  <span className="folder">✿</span>
                </td>
                <td className="col-forum">
                  <button className="forum-title link-btn" onClick={() => openThread(t)}>
                    {t.title}
                  </button>
                  <div className="forum-blurb">by {t.author}</div>
                </td>
                <td className="col-num">{t.replies}</td>
                <td className="col-num">{t.views.toLocaleString()}</td>
                <td className="col-last">
                  <em>{t.lastPost}</em>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    )
  } else if (page === 'thread' && currentThread) {
    mainContent = (
      <section className="thread-detail">
        <div className="breadcrumb">
          <button className="link-btn" onClick={() => navigate('home')}>Home</button>
          {' › '}
          {currentForum && (
            <>
              <button className="link-btn" onClick={() => { setPage('forum'); setCurrentThread(null) }}>
                {currentForum.title}
              </button>
              {' › '}
            </>
          )}
          <span>{currentThread.title}</span>
        </div>
        <div className="category-header page-category-header">
          <h2 style={{ fontSize: '18px' }}>{currentThread.title}</h2>
        </div>
        <div className="thread-posts">
          {currentThread.posts.map((post, i) => (
            <div key={i} className="post-card">
              <div className="post-author">
                <span className="post-avatar">♡</span>
                <strong>{post.author}</strong>
                <em className="post-time">{post.time}</em>
              </div>
              <div className="post-body">{post.content}</div>
            </div>
          ))}
        </div>
        <div className="reply-box">
          <h4>✧ post a reply ✧</h4>
          {loggedIn ? (
            <>
              <textarea
                className="reply-input"
                placeholder="type ur reply here bestie... ♡"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                rows={4}
              />
              <button className="btn" onClick={handleReply}>
                Post Reply ♡
              </button>
            </>
          ) : (
            <p className="login-prompt">
              <button className="link-btn" onClick={() => setModal('login')}>sign in</button>
              {' or '}
              <button className="link-btn" onClick={() => setModal('register')}>make a profile</button>
              {' to reply ♡'}
            </p>
          )}
        </div>
      </section>
    )
  } else if (page === 'members') {
    mainContent = (
      <section className="members-page">
        <div className="page-header">
          <h2>☆ Members Directory ☆</h2>
          <p className="page-sub">say hi to our <strong>12,847</strong> registered besties!! ✿</p>
        </div>
        <div className="members-grid">
          {allMembers.map((m) => (
            <div key={m.name} className="member-card">
              <div className="member-avatar">♡</div>
              <div className="member-name">{m.name}</div>
              <div className="member-title">{m.title}</div>
              <div className="member-meta">joined: {m.joined}</div>
              <div className="member-meta">{m.posts.toLocaleString()} posts</div>
            </div>
          ))}
        </div>
      </section>
    )
  } else if (page === 'search') {
    mainContent = (
      <section className="search-page">
        <div className="page-header">
          <h2>✿ Search the Boards ✿</h2>
        </div>
        <div className="searchbar">
          <label htmlFor="sq">✧ search ✧</label>
          <input
            id="sq"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="type something cute..."
            autoFocus
          />
          <button type="button" className="btn" onClick={handleSearch}>
            Go! ♡
          </button>
        </div>
        {searchQuery && (
          <>
            <p className="search-info">
              results for: <strong>"{searchQuery}"</strong>{' '}
              {searchResults.length === 0 ? '— nothing found!!' : `— ${searchResults.length} found ✿`}
            </p>
            {searchResults.length === 0 ? (
              <div className="no-results">
                <p>no results found for "{searchQuery}" ♡</p>
                <p className="page-sub">try different keywords bestie!!</p>
              </div>
            ) : (
              <table className="forum-table">
                <thead>
                  <tr>
                    <th className="col-forum">Topic</th>
                    <th className="col-num">Replies</th>
                    <th className="col-last">Forum</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((t) => (
                    <tr key={t.id}>
                      <td className="col-forum">
                        <button
                          className="forum-title link-btn"
                          onClick={() => openThread(t, t.forum)}
                        >
                          {t.title}
                        </button>
                        <div className="forum-blurb">
                          by {t.author} · {t.lastPost}
                        </div>
                      </td>
                      <td className="col-num">{t.replies}</td>
                      <td className="col-last">
                        <button className="link-btn" onClick={() => openForum(t.forum)}>
                          {t.forumTitle}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </section>
    )
  } else if (page === 'help') {
    mainContent = (
      <section className="help-page">
        <div className="page-header">
          <h2>✦ Help & FAQ ✦</h2>
          <p className="page-sub">got questions?? we got answers bestie!! ♡</p>
        </div>
        <div className="faq-list">
          {helpFAQ.map((item, i) => (
            <div key={i} className={`faq-item${openFAQ === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-arrow">{openFAQ === i ? '▲' : '▼'}</span>
              </button>
              {openFAQ === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
        <div className="help-contact">
          <p>
            still confused??{' '}
            <button className="link-btn" onClick={() => setModal('login')}>
              contact the webmistress
            </button>{' '}
            ✿
          </p>
        </div>
      </section>
    )
  }

  return (
    <div className="forum">
      <div className="sparkles" aria-hidden="true">
        <span style={{ top: '8%', left: '6%' }}>✦</span>
        <span style={{ top: '14%', left: '92%' }}>✧</span>
        <span style={{ top: '40%', left: '3%' }}>★</span>
        <span style={{ top: '62%', left: '96%' }}>✿</span>
        <span style={{ top: '78%', left: '8%' }}>♡</span>
        <span style={{ top: '90%', left: '88%' }}>✦</span>
      </div>

      <header className="masthead">
        <div className="masthead-inner">
          <div className="logo-block">
            <h1 className="logo">
              <span className="logo-star">✧</span>
              WiCSEGram
              <span className="logo-star">✧</span>
            </h1>
            <p className="tagline">♡ ur fave lil corner of the world wide web ♡ est. 2001</p>
          </div>
          <div className="welcome-box">
            {loggedIn ? (
              <>
                <p>
                  <span className="blink">♡</span>
                  <strong> welcome back, {currentUser}! ♡</strong>
                </p>
                <p className="welcome-sub">
                  <button className="link-btn welcome-link" onClick={() => navigate('members')}>
                    my profile
                  </button>
                  {' · '}
                  <button className="link-btn welcome-link" onClick={handleLogout}>
                    log out
                  </button>
                </p>
                <p className="welcome-sub">
                  <span className="blink">★</span> 47 cuties online rn ✿
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="blink">♡</span>
                  <strong> hi bestie! ur a guest ♡</strong>
                </p>
                <p className="welcome-sub">
                  <button className="link-btn welcome-link" onClick={() => setModal('login')}>
                    sign in
                  </button>
                  {' · '}
                  <button className="link-btn welcome-link" onClick={() => setModal('register')}>
                    make a profile
                  </button>
                </p>
                <p className="welcome-sub">
                  <span className="blink">★</span> 47 cuties online rn ✿
                </p>
              </>
            )}
          </div>
        </div>
        <nav className="navbar">
          <button className={`nav-btn${page === 'home' ? ' active' : ''}`} onClick={() => navigate('home')}>
            ♡ Home
          </button>
          <button className={`nav-btn${page === 'forum' || page === 'thread' ? ' active' : ''}`} onClick={() => navigate('home')}>
            ✧ Forum
          </button>
          <button className={`nav-btn${page === 'members' ? ' active' : ''}`} onClick={() => navigate('members')}>
            ☆ Members
          </button>
          <button
            className={`nav-btn${page === 'search' ? ' active' : ''}`}
            onClick={() => { setSearchQuery(''); navigate('search') }}
          >
            ✿ Search
          </button>
          <button className={`nav-btn${page === 'help' ? ' active' : ''}`} onClick={() => navigate('help')}>
            ✦ Help
          </button>
          {loggedIn ? (
            <button className="nav-btn" onClick={handleLogout}>
              ♡ Log Out
            </button>
          ) : (
            <>
              <button
                className={`nav-btn${modal === 'login' ? ' active' : ''}`}
                onClick={() => setModal('login')}
              >
                ♡ Log In
              </button>
              <button
                className={`nav-btn${modal === 'register' ? ' active' : ''}`}
                onClick={() => setModal('register')}
              >
                ✧ Sign Up
              </button>
            </>
          )}
        </nav>
      </header>

      {modal && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setModal(null) }}
        >
          <div className="modal">
            <button className="modal-close" onClick={() => setModal(null)} aria-label="close">
              ✕
            </button>
            {modal === 'login' ? (
              <>
                <h2 className="modal-title">♡ sign in ♡</h2>
                <form className="modal-form" onSubmit={handleLogin}>
                  <label>username</label>
                  <input
                    type="text"
                    placeholder="ur cute username..."
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    autoFocus
                  />
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="shhh its a secret..."
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />
                  <button type="submit" className="btn modal-btn">
                    sign in ♡
                  </button>
                  <p className="modal-switch">
                    no account?{' '}
                    <button type="button" className="link-btn" onClick={() => setModal('register')}>
                      make a profile!
                    </button>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2 className="modal-title">✧ join us! ✧</h2>
                <form className="modal-form" onSubmit={handleRegister}>
                  <label>username</label>
                  <input
                    type="text"
                    placeholder="something cute..."
                    value={registerForm.username}
                    onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                    autoFocus
                  />
                  <label>email</label>
                  <input
                    type="email"
                    placeholder="ur email..."
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  />
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="make it cute & safe..."
                    value={registerForm.password}
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, password: e.target.value })
                    }
                  />
                  <button type="submit" className="btn modal-btn">
                    join the fun ✿
                  </button>
                  <p className="modal-switch">
                    already a member?{' '}
                    <button type="button" className="link-btn" onClick={() => setModal('login')}>
                      sign in!
                    </button>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <div className="layout">
        <main className="main">{mainContent}</main>

        <aside className="sidebar">
          <div className="widget">
            <h3>✧ who's online ✧</h3>
            <ul className="online-list">
              {onlineUsers.map((u) => (
                <li key={u}>
                  <span className="dot" />
                  <button className="link-btn" onClick={() => navigate('members')}>
                    {u}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="widget">
            <h3>♡ quick poll ♡</h3>
            <p className="poll-q">what's ur fave lip gloss flavor?</p>
            {hasVoted ? (
              <p className="poll-thankyou">thanks for voting bestie!! ✿</p>
            ) : (
              <p className="poll-subtext">click to vote! ♡</p>
            )}
            <ul className="poll">
              {Object.entries(pollVotes).map(([label, votes]) => {
                const pct = Math.round((votes / totalPollVotes) * 100)
                return (
                  <li
                    key={label}
                    onClick={() => handleVote(label)}
                    className={hasVoted ? '' : 'poll-voteable'}
                    title={hasVoted ? '' : `vote for ${label}`}
                  >
                    <span className="poll-label">{label}</span>
                    <div className="bar">
                      <div
                        className="fill"
                        style={{ width: `${pct}%`, transition: 'width 0.4s ease' }}
                      />
                    </div>
                    <span className="poll-pct">{pct}%</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="widget shoutbox">
            <h3>☆ shoutbox ☆</h3>
            <ul className="shouts">
              {shouts.map((s, i) => (
                <li key={i}>
                  <strong>{s.author}:</strong> {s.text}
                </li>
              ))}
            </ul>
            <div className="shout-input">
              <input
                type="text"
                placeholder="say something cute..."
                value={shoutInput}
                onChange={(e) => setShoutInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleShout()}
              />
              <button type="button" className="btn" onClick={handleShout}>
                ♡
              </button>
            </div>
          </div>

          <div className="widget webring">
            <h3>✦ web ring ✦</h3>
            <p className="webring-text">
              <a href="#prev">« prev</a> · <strong>WiCSEGram</strong> ·{' '}
              <a href="#next">next »</a>
            </p>
            <p className="webring-text">
              part of the <em>~* cute lil sites *~</em> webring ♡
            </p>
          </div>
        </aside>
      </div>

      <footer className="footer">
        <p>
          powered by <strong>♡ WiCSEGram 3.1.4 ♡</strong> · © 2001–2026
        </p>
        <p className="footer-sub">
          <button className="link-btn footer-link" onClick={() => navigate('help')}>terms</button>
          {' · '}
          <button className="link-btn footer-link" onClick={() => navigate('help')}>privacy</button>
          {' · '}
          <button className="link-btn footer-link" onClick={() => navigate('help')}>
            contact the webmistress
          </button>
          {' · '}
          <a href="#rss">RSS 2.0</a>
        </p>
        <p className="footer-sub">
          best viewed in <strong>1024×768</strong> · made with ♡ on a candy iMac
        </p>
      </footer>
    </div>
  )
}

export default App
