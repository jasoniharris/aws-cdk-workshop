#!/usr/bin/env node
import * as cdk from "aws-cdk-lib"
// import { CdkWorkshopStack } from "../lib/cdk-workshop-stack"
import { WorkshopPipelineStack } from "../lib/pipeline-stack" //pipeline specific

const app = new cdk.App()
// new CdkWorkshopStack(app, "CdkWorkshopStack")
new WorkshopPipelineStack(app, "CdkWorkshopPipelineStack")
