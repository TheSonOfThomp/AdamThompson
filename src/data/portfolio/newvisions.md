---
title: New Visions
brand: newvisions
date: 2019-09-03
tagline: Monitoring data for student success
cover: 'dashboard-mock-on-mackbookAir.png'
color: '#0a4ace'
section: portfolio
---

# New Visions

<div class="tldr" markdown=1>

  <!-- WHAT -->
  ## Accessible metrics about a school’s performance.

  <!-- WHY -->
  It can be difficult to manage one of New York City's large public schools. Principals and VPs need up-to-date information about their school's demographics, academics, attendance and other data.

  <!-- HOW -->
  I designed and tested a multi-leveled dashboard to allow school managers to assess major data points at-a-glance and drill down to further explore and slice the data. 

  The process included designing and usability testing all three levels of the dashboard experience and the information architecture, prototyping the data-visualization graphs in d3, and defining the IA data model which dictates the UI options in every state.


<div class="cover-image vertical">

  ![Mockup of the New Visions dashboard UI](../../images/portfolio/cover/dashboard-mock-on-mackbookAir.png)
</div>

</div>

<!-- The challenge -->
<!-- Problem statement -->
  # No student left behind
  <!-- - We have a data tool that allows users to see curated lists of students, highlighting problems so kids don't fall thru cracks -->

  New Visions for Public Schools is a New York based non-profit developing systems and tools for managing NYC public schools. These tools enable schools to provide equitable education across the city, and ensure no student gets left behind.

  My work was focused on the Data Portal—a tool used by school staff that provides the data they need to stay on top of managing their school. 
  
  One way the Portal does this is with Student Lists used by councilors and mentors. These curated lists of students surface certain potential problems and provide a specific set of data with the goal of solving a specific problem—like highlighting students who are chronically absent, or who need to be scheduled for an exam. The goal is that staff can more easily identify the students they need to reach out to.

  [TODO - Image of a List]

  <!-- ## Users and audience -->
  ## Aggregate data
  While lists are intended to solve a lot of the problems seen by staff who interact with students directly—like councilors—there was a need to enhance the Portal to better serve school managers—people like principals, vice-principals, and other school-based New Visions staff. 

  These people want to see at-a-glance data about the entire school population. Before this project, the Portal had a dashboard with only a limited set of data points and didn't always provide enough context. Our goal was to identify important data points, and provide a better way to explore them.

<!-- ## Roles and responsibilities -->
  ## The team
  I was the lead designer on this project, and was involved in user research—defining the problem, designing a solution—information architecture, layout design, visual design, and prototyping, validating the design with usability testing, and developing the underlying data model for the dashboard.
  
  I had help with problem definition, and interacting with stakeholders from Danielle Scaramellino. Christine Han helped with scheduling and running usability testing sessions. Alisa Zhukova did a lot of the initial visual design concepts and accessibility testing. Finally I had design process guidance from Chris Avgerinos.

<!-- ## Scope and constraints -->
  <!-- ## What we did
  - The initial scope of this project was to identify important data points and design a way to see these all at-a-glance
  - On further user research and discussion with stakeholders, we designed a multi-level interactive dashboard for data points 
  - We wanted to validate that Now data was useful so we de-prioritized YOY historical data. 
  - We also wanted to learn more about what our users needs were before we built a more complex feature and a data model around it -->

<!-- # Process and what you did -->
# Defining what's important
We approached major stakeholders within and outside the organization, particularly our coaches who work with schools to establish best practices. These people were able to name data points that are important for identifying areas a school might want to focus on, and monitoring the performance of a school.

After gathering feedback on which metrics can help track a school's performance, we asked coaches to arrange the data labels in an understandable way. To identify this natural information architecture, I decided to run a card-sorting exercise. To do this I put each metric into an Airtable, and printed off each one as a card. I then asked each coach to sort these cards in whatever way made sense to them. 

[TODO - Image of dashboard Airtable foci as cards]

To little surprize, our coaches consistently organized the cards roughly in line with our targeted meetings between schools and coaches to discuss major areas for improvement, called [Strategic Data Checkins](https://sdc.newvisions.org). To confirm this organization scheme, we performed the same exercise with other stakeholders who were less familiar with the SDC process. 

While we were able to identify a logical way of ordering key metrics, we were unfortunately not able to determine which data points were more important to drive conversations in schools. The product team was hesitant to make a call on a hierarchy of these metrics, in fear of hiding potentially important information from schools. We decided to present all the data in an initial version of the dashboard, and monitor which data points proved to be most valuable to schools.

  <!-- - card sorting with users to find how to group data points
      - results lined up with SDCs
      - not able to speak to priority 
      - other than that # students is important -->

# Data at-a-glance
  - Users & stakeholders wanted to see 'data at-a-glance' for the high level data points 
  - Tried to identify ways to better organize the dashboards, but...
  - We didn't want to eliminate any data points from the view (see above)
  - Settled on an array of grouped tiles with a search box
      - it can be hard to see that there are more tiles below the fold, so we added the search box

[TODO - initial top-level mocks]

  <!-- - Brainstorm ways to organize data & show meaningful status
      - Constraints:
        - B/c we couldn't prioritize data points, needed to show all of them...
        - Org didn't want to take a stance on thresholds of good/bad values
  - Outcome was a bunch of grouped tiles. -->

# Breaking down the data
  - A single number isn't always that informative, so we needed to provide a way to analyze the aggregate data 
  - We wanted people to be able to see this data at a glance and be able to drill down to see the students that made up the aggregate data point in order to take action. 
  - Driven by users desire to compare across sub-groups — how they performed relative to each other
  - Enables them to see where problem areas are more easily


 ## Data visualization
  - We brainstormed what kinds of visualizations made the most sense
    - For each data point, identified what kind of data 
      - point-in-time => change over time doesn't matter
      - independent time-based => change over time matters
      - cumulative time-based => change over time, cumulative total matters
  - Decided on:
    - point-in-time => Bar graph
    - independent time-based => Line graph
    - cumulative time-based => Stacked line

    [TODO - mock of bar graph]
    [TODO - mock of Line graph]
    [TODO - mock of stacked-line graph]

    * Maybe mention that stacked bar was out of scope b/c hard to define 2 slicing dimensions
    * We wanted to validate that Now data was useful so we de-prioritized YOY historical data.
    * We also wanted to learn more about what our users needs were before we built a more complex feature and a data model around it

  ### Visual accessibility 
  - Alisa worked on the initial visual designs and color palette
  - We tested whether a stakeholder could understand what each graph represented

  ### Designing with "real" data
  - I created a mock-data creator in Node
  - Wanted to test interactions in the breakdown — how do users want to go to other 
  - Testing with fake data was confusing to our test users — they kept trying to find trends 

  ### Testing interactions
  - I prototyped the graphs in d3 & Vue
  - Used prototypes to test graph designs
    - Tested with more users
    - New users failed tests previously passed
    - Refined design in browser of the "cake-graph" after several iterations
  - Prototypes were handed off to developers 
    — made it easy to build final

## Table design  
  - Worked with PMs and stakeholders to identify additional useful data
    - After looking at multiple data points established a pattern:
    - Primary rollup data point, Inverse rollup groups, total students

## Student level
  - Stakeholders were also asking to see the specific students in certain buckets so they could take action on them
  - We created a student level table, similar to the curated lists

# Outcomes and lessons
  - Test with multiple users, at various levels of expertise
  - Test interactive prototypes for complex interactions
  - Learning what dashboard tiles are most useful, and improve the interface based on that (because we've expanded and out SDFs aren't meeting with every school anymore. Renewed initiative to behavior change
  - Some usability improvements were not made because they would take time to design and implement a solution. We'd come back to it later
