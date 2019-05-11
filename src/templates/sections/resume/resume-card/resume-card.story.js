import React from "react"
import { storiesOf } from "@storybook/react"
import ResumeCard from "./resume-card";

storiesOf(`Dashboard/Header`, module).add(`default`, () => (
  <ResumeCard></ResumeCard>
))