# Pierre
BSF Volunteer Tracker II

Reports should contain:
    Group number, features(s)
  
  Short Description of Your Feature(s) (and group number)  
  Group 16 - Manage volunteer Vouchers in database and send vouchers in emails.

## Listing of group members
  - Link to Project* -- a URL link(s) to the hosted site -- preferably on school server 
  - Link to repo(s) --preferably on GitHub

### Alex Du Bois
 - http://csci331.cs.montana.edu:5051
 - https://github.com/331F22/Pierre/tree/group-16
          
### Marnie Manning
 - http://csci331.cs.montana.edu:5008
 - https://github.com/331F22/Pierre/tree/group-16

### Jaden Schultz
 - http://csci331.cs.montana.edu:5033
 - https://github.com/331F22/Pierre/tree/group-16


### Link to group presentation slideshow
https://docs.google.com/presentation/d/1wxopk-MX0h20kNoUodDUsIpmZx__hyiakjoST_8YGlQ/edit?usp=sharing


## Creative objective 
- The goal of the project; the problem you set out to overcome or mission you set out to accomplish
- A paragraph detailing the goals your team set out with; the problem you wanted to solve or mission you wanted to accomplish.
#### Our functionality
- The main feature of our project was to track which volunteers had received tickets, and, when a "send email" button was pressed, send emails with vouchers to those who hadn’t received them. This involved a few smaller sub-problems: first, ensure that our database structure is suited to the feature; next, retrieve the needed data from the database; finally, populate the emails with data and send them. In a broader sense, we wanted to ensure that our feature would contribute to the site in a useful manner, and that it would be user-friendly. Sending the email was a clear need, and we built it to work when a single button was pressed, so it was as straight-forward for anyone to use. With the knowledge that the code base of this project was made of many branches, we also did our best to keep the project to itself, without many dependencies on other parts, or major changes to the entire site. This was overall successful (as mentioned before it should only rely on a button being pressed), but we did need to make changes to the database, and this meant that it would not fully integrate with other parts without them having the same updated database structure.

  &nbsp;  
    
## Tech summary
- How does it work? Provide high-level overview tools, APIs, npm packages, hooks, .env variables, etc.
- Two or three concise, well written, organized paragraphs documenting feature functionality and how it was achieved;

Maybe break into each section? - Database management, action on button press, email sending (SMTP server, etc), etc
  &nbsp;  
    
    
## Individual member notes 
- One paragraph per member: contributions and work (tasks and how achieved)
- An overview of your work, task to task, and some lessons learned; a detailing of the technologies you used used; a post-mortem -- what did you come away with? What would you do if you could do it again with the benefit of hindsight

#### Alex
 - My part of the project was doing the SQL – this involved both updating the database structure itself and creating SQL statements to fetch the data from the database. I began by looking at the design requirements in the “Bridger Ski Foundation Volunteer App” document. The first thing I noted was the format of the tickets (BSFabc123) – this meant updating the database structure for the ticketCode column to be 9 characters long. The other change to the database I decided to make was to the volunteers table. Because our feature was tracking the emails and vouchers, I decided to add an “email_sent” column to ensure that vouchers were only being sent to volunteers who hadn’t already received one. I then constructed the SQL statements for pulling the data that we needed from the volunteers table and the tickets table (making sure that only unused tickets and volunteers without vouchers were selected). Then I created the statements to update the two tables with the information that the ticket had been sent and who received it. All of this I was able to test and implement using the MariaDB server. If I were to do this again, I would take more time in looking at the database structure. I think making it so that the “issued_on” column in the tickets table was able to be null, and was updated when the email was sent (not when the ticket was added to the database) would have been a nice feaure. 
          
#### Marnie
 - 

#### Jaden
 - 
  &nbsp;  
    
## Conclusion 
- What you learned, what worked, what didn't, what you would do differently or the same.
  &nbsp;  
      
## References 
- A bibliography or listing of work (books, websites, etc.) used in the project.
- Any resources your group used to learn about the technologies used
