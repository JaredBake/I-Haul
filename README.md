# I-Haul

## Code Architecture

### Overview

**Client (Web / Mobile Web)**
 ├─ View (UI Components)
 ├─ Presenter (UI Logic)
 └─ Implementation(how the shared contract is recived and used)
 
**Shared Contracts**
 ├─ Data transfer objects (how the data looks)
 ├─ Interface definitions
 └─ Validation rules (Make sure the data is valid from client to backend)

**Backend**
 ├─ API Controllers
 ├─ Domain Services
 └─ Database

## MVP Roles

### Model
- Represents application data and domain state
- Knows nothing about UI
- Can call backend APIs

### View
- Pure UI
- Renders data
- Forwards user actions to Presenter
- Contains zero business logic

### Presenter
- Orchestrates UI behavior
- Talks to Models
- Formats data for the View
- Decides what the View should show