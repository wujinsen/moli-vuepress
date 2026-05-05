---
lang: en-US
title: Elasticsearch writing process
date: 2026-05-06
description: Elasticsearch writing process - bigdata related articles
translationPending: false
tags:
  - en
---

# Elasticsearch writing process

Writing a single document: Index request

Writing multiple documents: Bulk request

Operation process for writing a single document:

![](/bigdata/elasticsearch/img.png)

1. The client sends a write request to node1

2. Determine the shard 0 it belongs to based on the document ID. After finding the main shard at node3 through the content routing table information, the request is forwarded to node3.

3. Perform write operations on node3. If the primary shard is written successfully, the secondary shard will be notified. All secondary shards will be written successfully and report success to the coordinating node. The coordinating node will report successful writing to the client.

The write consistency policy defaults to quorum:
quorum  = int((primary+number_of_replicas)/2) +1
