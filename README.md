
#### Purpose
The aim is to create the best possible fantasy soccer team based on real-life player statistics and user preferences.

#### Problem Solved
This app addresses an entertainment need by allowing users to rank players in their fantasy team based on personal preferences.

#### User Interaction
- **Comment Section**: Users can enter comments with a character limit and rate players on a scale of 1-10. They can also give a star rating and add a disciplinary card (red/yellow).
- **Player Rating**: "I rate this player [ranking number from 1-10] because [insert comment]." Players are ranked through an algorithm and positioned in the user's fantasy team array based on their rating.

#### Static and Dynamic Data
- **Static Statistics**: Users rely on static stats to decide which players to add to their team.
- **Dynamic User Input**: Users' comments and ratings are dynamic and editable.

#### Building Your Team
1. **Create Your Team**: 
   - The landing page has a "Create Your Team" button that leads to the index page.
   - The index page displays all players as cards with stats.
   - Clicking on a player card navigates to the show page with detailed player statistics and their respective photo.

2. **Adding Players**:
   - Users can search for players by name or browse the player directory.
   - Add players to the team using an "Add Player to [Team Name]" button.
   - Display the current team beside the form with a limit of 10-11 players.
   - Alert users if the player limit is reached.

3. **Comment and Rate**:
   - Add comments with a character limit.
   - Rate players on a 1-10 scale and give star ratings.
   - Select disciplinary cards from a dropdown menu.

4. **Editing**:
   - Users can edit comments and ratings.
   - Update the player's position in the team array based on new ratings.

5. **Deleting**:
   - Users can delete comments with confirmation prompts.
   - Deleting a player's disciplinary card is also supported.

#### Front-End Structure
```plaintext
FantasySoccerStats/
│
└─── src/
     ├─── assets/
     │    ├─── image.png
     │    ├─── image.jpg
     │    ├─── image.svg
     │
     ├─── Components/
     │    ├─── NavBar.jsx
     │    ├─── Player.jsx
     │    ├─── PlayerDetails.jsx
     │    ├─── PlayerEditForm.jsx
     │    ├─── PlayerNewForm.jsx
     │    └─── Players.jsx
     │
     ├─── CSS/
     │    ├─── NavBar.css
     │    ├─── Player.css
     │    ├─── PlayerDetails.css
     │    ├─── PlayerEditForm.css
     │    ├─── PlayerNewForm.css
     │    └─── Players.css
     │
     ├─── Pages/
     │    ├─── EditPage.jsx
     │    ├─── ErrorPage.jsx
     │    ├─── HomePage.jsx
     │    ├─── IndexPage.jsx
     │    ├─── NewPage.jsx
     │    └─── ShowPage.jsx
     │
     ├─── App.css
     ├─── App.jsx
     ├─── index.css
     └─── main.jsx
     ├─── package-lock.json
     ├─── package.json
     ├─── README.md
     ├─── vite.config.js
```

#### Visual Layout

**Landing Page**
- Nav bar with app name and icon.
- Background carousel of soccer images.
- "Create Your Fantasy Team" button in the center.
- Optional footer.

**Index Page**
- Button: "Soccer Player/Stats Directory" on the left.
- Body: Display players as individual cards with stats.
- Clickable images for more details.

**Show Page**
- Detailed player information, comments, and disciplinary cards.

**New Form Page**
- Fields for team name and player search.
- Display current team players and alert if the limit is reached.
- Comment and rate players with character limits and star ratings.

#### Resource Section
- **Disciplinary Card Details & Comments**: Users can update, create, and delete disciplinary cards, but player stats remain static.
- **Editable Columns**: Users can add notes on players.

### Additional Notes
- Ensure that the player's name matches the file name for images.
- Add at least 20 additional players to the backend database for a total of 30.
- Use algorithms to calculate and display the average team rating based on user input and static stats.

### Specific Instructions

**Landing Page**
- **Nav Bar**: Horizontal bar with app name and icon on the left side.
- **Background**: Sliding carousel of general soccer images.
- **Button**: "Create Your Fantasy Team" in the middle of the page.

**Index Page**
- **Button**: "Soccer Player Directory" on the left side.
- **Body**: Player cards with stats. Each card includes:
  - Top: Player name
  - Image: Player photo
  - Position: Player position
  - Rating: Player rating

**Show Page**
- Displays detailed information, stats, and photo of the player.
- Includes comments and disciplinary card details.

**New Form Page**
- **Fields**: Create Team Name, search bar, and player directory link.
- **Player Cards**: Display player cards beside the form.
- **Current Team Display**: Show the current team players vertically.
- **Alert**: Notify users if the player limit is reached.
- **Comment Section**: Input field for comments with a character limit, rating dropdown, and star rating options.
- **Disciplinary Card Dropdown**: Red or yellow card options.

### Actions

**Comment Button**:
- Add comment with a character limit.
- Rate player on a 1-10 scale and give star ratings.

**Edit Button**:
- Edit existing comments and ratings.
- Update player position in the team array.

**Delete Button**:
- Delete comments with confirmation prompts.
- Delete player's disciplinary card with dropdown options.

### Calculations
- **Rating Calculation**: Average team rating based on user input and static stats.
- **Team Array**: Fill with 10-11 players and calculate the average rating for display.

### Page Flow

**Landing Page**:
- Click "Create Your Team" → Navigate to Index Page.

**Index Page**:
- Click on a player image → Navigate to Show Page.

**Show Page**:
- View detailed player information.

**New Form Page**:
- Add players, comments, and ratings.
- Submit form → View final team on Show Page.

---