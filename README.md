# Pierre - Group 16
BSF Volunteer Tracker II - Manage volunteer vouchers in database and send vouchers in emails.

## Listing of group members
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
- https://docs.google.com/presentation/d/1wxopk-MX0h20kNoUodDUsIpmZx__hyiakjoST_8YGlQ/edit?usp=sharing  
  &nbsp;  

## Creative objective 
#### Our functionality
- The main feature of our project was to track which volunteers had received tickets, and, when a "send email" button was pressed, send emails with vouchers to those who hadn’t received them. This involved a few smaller sub-problems: first, ensure that our database structure is suited to the feature; next, retrieve the needed data from the database; finally, populate the emails with data and send them. In a broader sense, we wanted to ensure that our feature would contribute to the site in a useful manner, and that it would be user-friendly. Sending the email was a clear need, and we built it to work when a single button was pressed, so it was straight-forward for anyone to use. With the knowledge that the code base of this project was made of many branches, we also did our best to keep the project to itself, without many dependencies on other parts, or major changes to the entire site. This was overall successful (as mentioned before it should only rely on a button being pressed), but we did need to make changes to the database, and this meant that it would not fully integrate with other parts without them having the same updated database structure. Overall this meant that our code would be easy to use for a person working on the larger BSF project in the future.  
  &nbsp;  
    
## Tech summary
- Database management, action on button press, email sending (SMTP server, etc), etc

- A key component of this project was accessing the database to retreive both the information of volunteers who have not received a voucher, and the information of un-issued tickets. This was done using hooks and state variables so that once the page loaded, all of the information needed to populate the emails was easily accessable. To call the queries on the database itself, Axios was used to call an api which executed the SQL and returned the necessary information.  
  &nbsp;  
    
    
## Individual member notes 
#### Alex
 - My part of the project was doing the SQL – this involved both updating the database structure itself and creating SQL statements to fetch the data from the database. I began by looking at the design requirements in the “Bridger Ski Foundation Volunteer App” document. The first thing I noted was the format of the tickets (BSFabc123) – this meant updating the database structure for the ticketCode column to be 9 characters long. The other change to the database I decided to make was to the volunteers table. Because our feature was tracking the emails and vouchers, I decided to add an “email_sent” column to ensure that vouchers were only being sent to volunteers who hadn’t already received one. I then constructed the SQL statements for pulling the data that we needed from the volunteers table and the tickets table (making sure that only unused tickets and volunteers without vouchers were selected). Then I created the statements to update the two tables with the information that the ticket had been sent and who received it. All of this I was able to test and implement using the MariaDB server - the structural changes and the queries I made are visible in the Database Changes and Queries file. Though it was somewhat outside the scope of my section, I also began implementing some of the queries using Axios calls. If I were to do this again, I would take more time in looking at the database structure. I think making it so that the “issued_on” column in the tickets table was able to be null, and was updated when the email was sent (not when the ticket was added to the database) would have been a nice feaure. 
          
#### Marnie
 - My part of the project was setting up the emailing functionality. This involved setting up a dummy email and a test account with https://app.elasticemail.com/ to create an SMTP server. My goal was to make something easy to use and easy to build off of. I think I achieved this, as the code is pretty readable and would be very easy to edit for a variety of database configurations. I largely worked with the https://www.smtpjs.com/ library for the email functionality specifically. Working with SMTP servers was a totally new experience for me that was not covered in class. It was very cool to learn how that worked and what technologies were out there. I think that the scope of the project was not quite clear to me (and likely others) until partway through the project. If I had better understood the scope and how the product was going to be used I think I could have made something more dialed in to the clients needs. Overall it was a great opportunity to dive a bit deeper into react, even if what I worked on did not go deep into what react is capable of.

#### Jaden
 - Worked on presentation and some connective tissue.  
  &nbsp;  
    
## Conclusion 
#### Alex
- I think the most helpful thing we did for this project was build a clear structure from the beginning. Having to divide up tasks for the React Project v1.0 assignment and presenting early in the project meant that we needed to have our feature and implementations planned out. This meant that I always had a clear direction of what I needed to work on, and how it fit into the project as a whole. I do think one slight drawback of planning so early was that I didn’t really shift from my initial approach to the problem – I just used the plan I came up with in that first week. While it worked out just fine and my method was successful, in hindsight I do think it would have been interesting if we had discussed the problem more in our group, as it would be fun to see what other kinds of approaches were possible.

#### Marnie
- I do wish that we had more time to devote solely to this project, I think having a lot of work to do alongside everything really made it hard to give this project its all.
- Wish we could have worked with other groups some more
- The 8 group groups were a lot, wish we all made assigned components or had slightly larger subgroups that each made a full website
- Did not have enough guidelines from the client
- Was cool to work with a code base and have to figure out how it worked
- I wish I learned more about how to keep the sensitive information safe
- Was cool to be able to learn on my own some stuff. I liked getting to figure out a small, new, and bite sized challenge
- Had to invent what our deliverable looked like. Cool on one hand, but also lots of self doubts.
- Maybe given more time would have explored other SMTP options and other emailing libraries. I might have also enjoyed looking at payed services that would be more secure and work better for the clients intended uses. I also liked getting to learn about how to make it more secure, but in learning some of that I also really understood where our code was not the most secure and did not really know how to fix that. Would have loved to have more time to chew even just into that.  
  &nbsp;  
      
## References 
- https://app.elasticemail.com/ 
- https://www.smtpjs.com/
