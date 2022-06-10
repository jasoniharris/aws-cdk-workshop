#!/usr/bin/env node
import * as cdk from "aws-cdk-lib"
import { WorkshopPipelineStack } from "../lib/pipeline-stack" //pipeline specific

import { CdkWorkshopStack } from "../lib/cdk-workshop-stack"

const app = new cdk.App()
new CdkWorkshopStack(app, "CdkWorkshopStack")
