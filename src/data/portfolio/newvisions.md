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

<section class="tldr" markdown=1>

  <!-- WHAT -->
  ## Accessible metrics about a school’s performance.

  <!-- WHY -->
  It can be difficult to manage one of New York City's large public  schools. Principals and VPs need up-to-date information about their school's demographics, academics, attendance and other data.
  
  <!-- This is doubly true when everything changes so suddenly like it did in early 2020. -->

  <!-- HOW -->
  I designed and tested architecture for a multi-leveled dashboard experience that highlights important data points for school managers, and enables them to further explore the data. 

  The process included designing and usability testing all three levels of the dashboard experience and the information architecture, prototyping the data-visualization graphs in d3, and defining the IA data model which dictates the UI options in every state.

<div class="cover-image vertical">

  ![Mockup of the New Visions dashboard UI](../../images/portfolio/cover/dashboard-mock-on-mackbookAir.png)
</div>

</section>

<!-- <section class="team">
  
  # My Role
  Lead designer, including user research, problem definition, information architecture, layout design, visual design,  prototyping, usability testing, and data modelling.

  # The team
  - Danielle Scaramellino | Director of Product
  - Chris Avgerinos | Director of UX Design
  - Christine Han | UX Researcher
  - Alisa Zhukova | UI Designer
</section> -->

<!-- The challenge -->
<!-- Problem statement -->
  # No student left behind
  <!-- - We have a data tool that allows users to see curated lists of students, highlighting problems so kids don't fall thru cracks -->

  New Visions for Public Schools is a New York based non-profit developing systems and tools for managing NYC public schools. These tools enable schools to provide equitable education across the city, and ensure no student gets left behind.

  My work was focused on the Data Portal—a tool used by school staff that provides the data they need to stay on top of managing their school. 
  
  One way the Portal does this is with curated lists of students for councilors and teachers. These lists surface potential problems and provide specific data with the goal of solving the problem—like  students who need attendance support, or who need to be scheduled for an exam. The goal is that staff can more easily identify specific students they need to reach.

  ![Curated attendance list in the New Visions Data Portal](../../images/portfolio/newvisions/nv-list-attendance.png)

  <!-- ## Users and audience -->
  ## Data for Managers
  While lists are intended to aid staff who interact with students directly—like councilors—there was a need to enhance the Portal to better serve school managers—like principals, vice-principals, and other admin staff. 

  While principals are managers in title, many are promoted teachers, and have the individual-focused mentality of a mentor. This is not a bad thing at all, but it can be distracting. Managers need to see the overall status of their school to identify broader issues using at-a-glance data about the entire school population. 
  
  Our goal was to design a new section of the app and provide this at-a-glance data, and a way to break it down to identify broader problems.
  
<!-- ## Scope and constraints -->
  <!-- ## What we did
  - The initial scope of this project was to identify important data points and design a way to see these all at-a-glance
  - On further user research and discussion with stakeholders, we designed a multi-level interactive dashboard for data points 
  - We wanted to validate that Now data was useful so we de-prioritized YOY historical data. 
  - We also wanted to learn more about what our users needs were before we built a more complex feature and a data model around it -->

<!-- # Process and what you did -->
# Data at-a-glance

The primary user goal for this project was to:

> View aggregate, high-level data 'at-a-glance' to enable school managers to make informed executive decisions. 

We approached major stakeholders within and without the organization to identify data points that might be important for making this type of decision. The conclusion was that the types of decisions we needed to support, and therefore data points needed to inform them were many and varied. 

Christine & I ran a card-sorting activity to identify potential groupings and hierarchy for these data points, however we weren't able to define a smaller set of data that would be useful to *all* managers at *all* times of the school year. 

Since this work would need to support *all* 709 partner schools accross NYC, we made the decision that we would not develop functionality to customize the available data, or add logic to toggle data at specific times of the year. We would use analytics from the initial version of the data dashboard to monitor whether certain data points *were* more useful than others, and revisit the feature at a later date.

Armed with this knowledge, and a useful categorization scheme gleaned from the card sorting activity, I set out designing potential layouts for this dashboard.

## Dashboard design

Since the guiding design principle for the dashboard was data at-a-glance, I wanted to make the data the central part of this interface. 

Jumping off from existing designs that Chris had created, I designed a grid layout used both line graphs and big numbers to highlight data points. Initial designs didn't include explicit grouping of similar data, but we quickly realized that finding the data point you needed was difficult. After several rounds of usability testing to ensure users could find the data they were looking for, we landed on this design for the dashboard.

<!-- What benefit do line graphs serve on this level? -->

![TODO - top-level mocks]()

<!-- https://mermaid-js.github.io/mermaid/#/flowchart -->

# Modeling Metadata

While analyzing the data points and brainstorming ways to visualize it with the team, I noticed many commonalities with how we talked about certain metrics. Characteristics like the data "rollup type", or  distinctions like "point-in-time" data versus "cumulative" data helped us understand the data points we were talking about. 

I documented these characteristics, and developed a model in Airtable to organize this metadata. I later used this model to help develop an interactive prototype. The data engineering team finally took over the table and now use it to collaborate with the product team to update and define new dashboard data. 

![TODO - UML/Flowchart of data model]()

This data model was one of the key components in enstablishing a reusable architecture, making designing and implementating new metrics much easier.

# Breaking down the data

While a single data point is useful to identify potential problem areas, it doesn't provide much insight into the problem and its potential solutions. School managers wanted to zoom in and compare aggregate data across sub-groups, and even see which individual students made up those aggregate numbers. By providing a mid-level breakdown, and student level list we could provide the information managers needed to make informed decisions. 



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
  - More graph types - Historical & Sankey
