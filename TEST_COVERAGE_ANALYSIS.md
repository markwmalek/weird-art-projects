# Test Coverage Analysis

## Current State

The codebase has **zero tests**. There is no testing framework installed, no test scripts
in `package.json`, and no test files anywhere in the project. This means every source file
is completely untested.

| Area | Source Files | Test Files | Coverage |
|------|-------------|------------|----------|
| Components | 8 | 0 | 0% |
| Pages | 4 | 0 | 0% |
| App entry | 2 | 0 | 0% |
| **Total** | **14** | **0** | **0%** |

---

## Recommended Testing Setup

Before writing any tests, the project needs a testing framework. The recommended stack for
a Vite + React project:

- **Vitest** - Test runner (native Vite integration, fast, compatible with Jest API)
- **@testing-library/react** - Component rendering and interaction
- **@testing-library/jest-dom** - DOM assertion matchers
- **jsdom** - Browser environment simulation

---

## Priority Areas for Test Coverage

### Priority 1: Business Logic (High Impact, Easy to Test)

#### `Parrish.jsx` - Calendar & Event Logic

This file contains the most testable business logic in the codebase. Three pure/near-pure
functions drive the calendar behavior:

**`getEventsForDay(day)`** (line 27-29)
- Filters the events array by day number
- Should be extracted to a utility and tested with cases:
  - Day with one event (e.g., day 6 returns "Launch Party")
  - Day with multiple events (e.g., day 8 returns 2 events, day 15 returns 2 events)
  - Day with no events (e.g., day 1 returns empty array)
  - Edge cases: day 0, day 29, negative numbers

**`getDayOfWeek(day)`** (line 49-51)
- Calculates day-of-week from a February date using `FEB_START_DAY`
- Should be tested:
  - Feb 1 (Sunday = 0)
  - Feb 2 (Monday = 1)
  - Feb 7 (Saturday = 6)
  - Feb 28 (Saturday = 6)

**`isOpen(day)`** (line 53-56)
- Returns false for Mondays, true otherwise
- Should be tested:
  - Monday dates (2, 9, 16, 23) should return false
  - All other weekdays should return true
  - Feb 1 (Sunday) should return true

**Calendar grid generation** (lines 59-65)
- Builds array of cells with leading nulls and day numbers
- Should verify: correct number of null padding cells, days 1-28 present

#### Why this matters
The calendar is the most interactive part of the site. A bug in `isOpen()` or
`getDayOfWeek()` would show the wrong open/closed status to visitors. A bug in
`getEventsForDay()` could hide events entirely.

---

### Priority 2: Interactive Component Behavior (Medium-High Impact)

#### `Nav.jsx` - Navigation State Management

The Nav component has multiple interactive behaviors worth testing:

- **Dropdown toggle**: Clicking "Projects" opens/closes the dropdown menu
- **Click-outside-to-close**: Clicking outside `projectsRef` closes the projects dropdown
- **Mobile menu toggle**: Hamburger button toggles `mobileOpen` state
- **Mobile menu close on navigation**: Clicking any link calls `closeMobile()`
- **Combined behavior**: `handleProjectClick` closes both dropdown and mobile menu

Suggested test cases:
- Dropdown is hidden by default
- Clicking "Projects" shows dropdown with "Parties on Parrish" and "Weird Windows"
- Clicking "Projects" again hides dropdown
- Clicking outside the dropdown closes it
- Clicking a project link closes both the dropdown and mobile menu
- Hamburger button toggles mobile menu visibility
- Navigation links are present and point to correct routes

#### `AppLink.jsx` - iOS PWA Compatibility

This component has platform-specific branching that should be tested:

- **Normal browser mode**: Click passes through to React Router `<Link>` normally
- **iOS PWA mode** (`window.navigator.standalone === true`): Click calls
  `e.preventDefault()` and uses `navigate()` instead
- **onClick chaining**: Custom `onClick` handler is always called regardless of mode

Suggested test cases:
- Renders a React Router Link with correct `to` prop
- In normal mode, does not call `preventDefault`
- In PWA mode, calls `preventDefault` and calls `navigate(to)`
- Calls the passed `onClick` handler in both modes
- Passes through additional props (className, etc.)

---

### Priority 3: Component Rendering (Medium Impact)

#### `Parrish.jsx` - Calendar UI Interactions

Beyond the logic tests above, the rendered calendar UI should be tested:

- Default state shows "Select a day to see details" prompt
- Clicking a day with events shows event details panel
- Clicking a day without events but that is open shows "Open 10 AM - 3 PM"
- Monday cells are disabled (not clickable)
- Toggling between "Calendar" and "List" view modes
- List view renders all events with correct day-of-week labels
- Event admission price displays when present, hidden when null

#### `Marquee.jsx` - Prop-Driven Rendering

- Renders items text content
- Applies `marquee--dark` class when `dark={true}`
- Sets `--marquee-speed` CSS variable from `speed` prop
- Uses separator icon image when `separatorIcon` provided
- Falls back to sparkle character when no icon
- Content is tripled (3 `marquee__content` spans) for animation looping

#### `WindowsMap.jsx` - Map Integration

This component is harder to unit-test due to the Leaflet dependency, but worth testing:

- Renders the map container div with ref
- Renders the legend with all 7 locations
- Legend shows artist name and address for each location
- Leaflet map initialization can be tested with a mock
- Cleanup function removes the map instance on unmount

---

### Priority 4: Page Rendering & Routing (Lower Impact, Good for Regression)

#### `App.jsx` - Route Configuration

- Route `/` renders the Home page
- Route `/parrish` renders the Parrish page
- Route `/windows` renders the Windows page
- Route `/team` renders the Team page
- All pages are wrapped in Layout (Nav + Footer)

#### `Home.jsx` - Landing Page

- Renders the HeroSvg component
- Renders 2 project tiles with correct links (`/parrish`, `/windows`)
- Renders the "About Weird" section
- "Meet the Team" link points to `/team`

#### `Team.jsx` - Team Page

- Renders all 7 team members
- Each member card shows name, role, bio, and image
- Members with `linkText` show a link; those without (Jill) do not
- ContactCard is rendered at the bottom

#### `Windows.jsx` - Windows Page

- Renders all 7 artist window entries
- Alternating layout (`windows__artist--reverse` on odd indices)
- Artist info shows title, location, handle, and description
- WindowsMap component is rendered
- Sponsor logos are displayed

#### Static Components

- **`Footer.jsx`**: Renders the 501(c)(3) text
- **`ContactCard.jsx`**: Renders mailto link to `lindsay@weirdproductions.art`
- **`Layout.jsx`**: Renders Nav, children, and Footer in correct order

---

## Suggested Implementation Order

1. **Install testing dependencies** (Vitest, Testing Library, jsdom)
2. **Extract and test pure logic** from `Parrish.jsx` (`getEventsForDay`,
   `getDayOfWeek`, `isOpen`, calendar grid builder) - highest value per effort
3. **Test Nav.jsx interactions** - most complex interactive behavior
4. **Test AppLink.jsx** - small but tricky platform-branching logic
5. **Test Marquee.jsx rendering** - prop-driven, easy to test
6. **Test page-level rendering** for Home, Parrish, Windows, Team
7. **Test App.jsx routing** - integration-level route verification
8. **Test WindowsMap.jsx** with Leaflet mocked - last because it requires the
   most mocking effort

## Estimated Test Count

| Area | Estimated Tests |
|------|----------------|
| Parrish business logic | 15-20 |
| Nav interactions | 8-10 |
| AppLink behavior | 5-6 |
| Marquee rendering | 5-6 |
| Parrish calendar UI | 8-10 |
| Page rendering (4 pages) | 15-20 |
| App routing | 4-5 |
| WindowsMap | 5-6 |
| Static components | 4-5 |
| **Total** | **~70-90** |
