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
  ## Easily access important data about a school’s performance.

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
  # Ensuring nobody falls through the cracks
  <!-- - We have a data tool that allows users to see curated lists of students, highlighting problems so kids don't fall thru cracks -->

  New Visions for Public Schools is a New York based non-profit developing management tools for NYC public schools. These tools enable schools to provide equitable education across the city, and ensure no student gets left behind.

  My work is focused on the Data Portal—a tool used by school staff that provides the data they need to stay on top of managing their school. 
  
  One way the Portal does this is with Student Lists used by councilors and mentors. These curated lists of students surface certain potential problems and provide a specific set of data with the goal of solving a specific problem—like highlighting students who are chronically absent, or who need to be scheduled for an exam. The goal is that staff can more easily identify the students they need to reach out to.

  [TODO - Image of a List]

  <!-- ## Users and audience -->
  ## Data at a glance 
  While lists are solve a lot of the problems seen by staff that interact with students directly, there was a need to enhance the Portal to better serve school managers—people like principals, Vice-principals, and other school-based New Visions staff. 

  These people want to see at-a-glance data about the entire school population. Before this project, the Portal had a dashboard with only a limited set of data points and didn't always provide enough context. Our goal was to identify important data points, and provide a better way to explore them.

<!-- ## Roles and responsibilities -->
  ## How I helped
  I was the lead designer on this project, and was involved in user research—defining the problem, designing a solution—information architecture, layout design, visual design, and prototyping,validating the design with usability testing, and developing the underlying data model for the dashboard.
  
  I had help with problem definition, and interacting with stakeholders from Danielle Scaramellino. Christine Han helped with scheduling and running usability testing sessions. Alisa Zhukova did a lot of the initial visual design concepts and accessibility testing. Finally I had design process guidance from Chris Avgerinos.

<!-- ## Scope and constraints -->
  <!-- ## What we did
  - The initial scope of this project was to identify important data points and design a way to see these all at-a-glance
  - On further user research and discussion with stakeholders, we designed a multi-level interactive dashboard for data points 
  - We wanted to validate that Now data was useful so we de-prioritized YOY historical data. 
  - We also wanted to learn more about what our users needs were before we built a more complex feature and a data model around it -->

<!-- # Process and what you did -->
# Defining what's important
  - Ask stakeholders about what are key indicators
  - For each data point, identified what kind of data 
      - point-in-time => change over time doesn't matter
      - independent time-based => change over time matters
      - cumulative time-based => change over time, cumulative total matters
  - card sorting with users to find how to group data points
      - results lined up with SDCs
      - not able to speak to priority 
      - other than that # students is important

## Designed the main level of the dashboard
  - Principle for this level was 'data at-a-glance'
  - Brainstorm ways to organize data & show meaningful status
      - Constraints:
        - B/c we couldn't prioritize data points, needed to show all of them...
        - Org didn't want to take a stance on thresholds of good/bad values
  - Outcome was a bunch of grouped tiles.

## Designed break-down level
  - Driven by users desire to see how different sub-groups performed relative to each other
  - Enables them to see where problem areas are more easily

 ## Data visualization
  - We brainstormed what kinds of visualizations made the most sense
  - Decided on:
    - point-in-time => Bar graph
    - independent time-based => Line graph
    - cumulative time-based => Stacked line
  - Alisa worked on the initial visual designs and color palette
  - We tested whether a stakeholder could understand what each graph represented

  - I created a mock-data creator in Node
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
  - 