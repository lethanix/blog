---
title: "Amazon Q in Connect: Deploy a Web Crawler Knowledge Base via the AWS CLI"
description: Integrate a Web Crawler with Amazon Q in Connect using only the terminal.
duration: 20min
date: 2025-06-17
tag: 
    aws
    draft
---

Amazon Connect is an amazing and complex service that allow us to create Contact Centers that fit our business need. AWS receantly release a new feature where we can create AI Agents that can help out our service agents to assist the clients, or even help them directly with the Self-Service feature. All thanks to the help of the Amazon Q service.

We can customize where the AI Agent can gather the information needed to properly assist. This source of information is called a Knowledge Base. Affortunately, Amazon Q in Connect provides us with different integration options to choose from. In this blog we are going to focus in the creation of the Web Crawler Knowledge Base (integration) using only the terminal and the AWS CLI.

## Create the Integration

Create an agent assistant using the `CreateAssistant` API [1]:

```bash
aws qconnect create-assistant \
    --name $ASSISTANT_NAME \
    --type "AGENT" \
    --description $DESCRIPTION
```

NOTE: Keep in mind that you will need to change the values with the prefix `$`. 

Create a managed knowledge base using the `CreateKnowledgeBase` API [2]:

```bash
aws qconnect create-knowledge-base \
    --knowledge-base-type MANAGED \
    --name $KB_NAME \
    --source-configuration file://source-config.json
```

The `source-config.json` is a file containing the web crawler information, including the URLs:

```json
{
	"managedSourceConfiguration": {
		"webCrawlerConfiguration": {
			"crawlerLimits": {
				"rateLimit": 300
			},
			"urlConfiguration": {
				"seedUrls": [
					{ 
						"url": $URL
					}
				]	
			}
		}
	}
}
```

Create a knowledge base association using the `CreateAssistantAssociation` API [3]:

```bash
aws qconnect create-assistant-association \
	--assistant-id $ASSISTANT_ID \
	--association-type KNOWLEDGE_BASE \
	--association '{ "knowledgeBaseId": $KB_ID }'
```

Create the wisdom integration association using the `CreateIntegrationAssociation` API [4]:

```bash
aws connect create-integration-association \
	--instance-id $CONNECT_INSTANCE_ID \
	--integration-type WISDOM_ASSISTANT \
	--integration-arn $ASSISTANT_ARN
```

Associate the integration with the connect instance using the `CreateIntegrationAssociation` API [4]:

```bash
aws connect create-integration-association \
	--instance-id $CONNECT_INSTANCE_ID \
	--integration-type WISDOM_KNOWLEDGE_BASE \
	--integration-arn $KB_ARN
```

## Resources
[1] CreateAssistant - https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_CreateAssistant.html
[2] CreateKnowledgeBase - https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_CreateKnowledgeBase.html
[3] CreateAssistantAssociation - https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_CreateAssistantAssociation.html
[4] CreateIntegrationAssociation - https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html

