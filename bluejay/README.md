# Bluejay metrics and guarantees

Metrics and guarantees for the project Bluejay.

## Metrics

### NUMBER_PIVOTAL_STARTED_STORIES
eee
``` json
{
  "NUMBER_PIVOTAL_STARTED_STORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "started"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_PIVOTAL_FINISHED_STORIES

``` json
{
  "NUMBER_PIVOTAL_FINISHED_STORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "finished"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_PIVOTAL_ACCEPTED_STORIES

``` json
{
  "NUMBER_PIVOTAL_ACCEPTED_STORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "accepted"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_PIVOTAL_DELIVERED_STORIES

``` json
{
  "NUMBER_PIVOTAL_DELIVERED_STORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "delivered"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_GITHUB_NEW_BRANCH

``` json
{
  "NUMBER_GITHUB_NEW_BRANCH": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "ghwrapper": {
          "events": {
            "type": "CreateEvent",
            "payload": {
              "ref_type": "branch"
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_GITHUB_OPEN_PR

``` json
{
  "NUMBER_GITHUB_OPEN_PR": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "github": {
          "allPR": {}
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_GITHUB_MERGE_PR_OLD

``` json
{
  "NUMBER_GITHUB_MERGE_PR_OLD": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "github": {
          "events": {
            "type": "PullRequestEvent",
            "payload": {
              "action": "closed",
              "pull_request": {
                "base": {
                  "label": "%GITHUB.REPO_OWNER%:master"
                }
              }
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_GITHUB_MERGE_PR

``` json
{
  "NUMBER_GITHUB_MERGE_PR": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "github": {
          "mergedPR": {
            "base": {
              "label": "%GITHUB.REPO_OWNER%:master"
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_HEROKU_RELEASES

``` json
{
  "NUMBER_HEROKU_RELEASES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "heroku": {
          "releases": {
            "status": "succeeded",
            "description": "%CONTAINS%Deploy"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_TRAVIS_BUILDS

``` json
{
  "NUMBER_TRAVIS_BUILDS": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "travis": {
          "builds_public": {
            "@type": "build"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_TRAVIS_FAILED_BUILDS

``` json
{
  "NUMBER_TRAVIS_FAILED_BUILDS": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "travis": {
          "builds_public": {
            "@type": "build",
            "state": "failed"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_CC_COVERAGE

``` json
{
  "NUMBER_CC_COVERAGE": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "codeclimate": {
          "coverage": {
            "data": {
              "attributes": {
                "covered_percent": "%HIGHER_OR_EQUAL%0"
              }
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### NUMBER_CC_COVERAGE_OVER_80

``` json
{
  "NUMBER_CC_COVERAGE_OVER_80": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": "number",
      "event": {
        "codeclimate": {
          "coverage": {
            "data": {
              "attributes": {
                "covered_percent": "%HIGHER%80"
              }
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_NEWBRANCH_STARTEDSTORIES

``` json
{
  "PERCENTAGE_NEWBRANCH_STARTEDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "events": {
                "type": "CreateEvent",
                "payload": {
                  "ref_type": "branch"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "started"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_NEWBRANCHWR_STARTEDSTORIES

``` json
{
  "PERCENTAGE_NEWBRANCHWR_STARTEDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "ghwrapper": {
              "events": {
                "type": "CreateEvent",
                "payload": {
                  "ref_type": "branch"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "started"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND

``` json
{
  "PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "events": {
                "type": "CreateEvent",
                "payload": {
                  "ref": "#CONTAINS(changes.0.id)#",
                  "ref_type": "branch"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "started"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_OPENPR_FINISHEDSTORIES

``` json
{
  "PERCENTAGE_OPENPR_FINISHEDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "allPR": {}
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "finished"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_OPENPR_FINISHEDSTORIES_BIND

``` json
{
  "PERCENTAGE_OPENPR_FINISHEDSTORIES_BIND": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "allPR": {
                "head": {
                  "ref": "#CONTAINS(changes.0.id)#"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "finished"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_MERGEPR_DELIVEREDSTORIES

``` json
{
  "PERCENTAGE_MERGEPR_DELIVEREDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "mergedPR": {
                "base": {
                  "label": "%GITHUB.REPO_OWNER%:master"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "delivered"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_MERGEPR_DELIVEREDSTORIES_BIND

``` json
{
  "PERCENTAGE_MERGEPR_DELIVEREDSTORIES_BIND": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "github": {
              "mergedPR": {
                "head": {
                  "ref": "#CONTAINS(changes.0.id)#"
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "delivered"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_RELEASES_DELIVEREDSTORIES

``` json
{
  "PERCENTAGE_RELEASES_DELIVEREDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "heroku": {
              "releases": {
                "status": "succeeded",
                "description": "%CONTAINS%Deploy"
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "delivered"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_RELEASES_DELIVEREDSTORIES_BIND

``` json
{
  "PERCENTAGE_RELEASES_DELIVEREDSTORIES": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "heroku": {
              "releases": {
                "status": "succeeded",
                "description": "%CONTAINS%Deploy"
              }
            },
            "window": 1440
          }
        }
      },
      "event": {
        "pivotal": {
          "activity": {
            "highlight": "delivered"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_FAILEDBUILDS_BUILDS

``` json
{
  "PERCENTAGE_FAILEDBUILDS_BUILDS": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "travis": {
              "builds_public": {
                "@type": "build",
                "state": "failed"
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "travis": {
          "builds_public": {
            "@type": "build"
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### PERCENTAGE_80COVERAGE_COVERAGE

``` json
{
  "PERCENTAGE_80COVERAGE_COVERAGE": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "percentage": {
          "related": {
            "codeclimate": {
              "coverage": {
                "data": {
                  "attributes": {
                    "covered_percent": "%HIGHER%80"
                  }
                }
              }
            },
            "window": 86400
          }
        }
      },
      "event": {
        "codeclimate": {
          "coverage": {
            "data": {
              "attributes": {
                "covered_percent": "%HIGHER_OR_EQUAL%0"
              }
            }
          }
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### VALUE_CC_COVERAGE

``` json
{
  "VALUE_CC_COVERAGE": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "value": {
          "parameter": "attributes.covered_percent",
          "return": "newest",
          "traceback": true
        }
      },
      "event": {
        "codeclimate": {
          "coverage": {}
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      }
    }
  }
}
```

### VALUE_OFFSET_CC_COVERAGE

``` json
{
  "VALUE_OFFSET_CC_COVERAGE": {
    "computer": {
      "$ref": "#/context/definitions/computers/eventcomputer"
    },
    "measure": {
      "computing": "actual",
      "element": {
        "value": {
          "parameter": "attributes.covered_percent",
          "return": "newest",
          "traceback": true
        }
      },
      "event": {
        "codeclimate": {
          "coverage": {}
        }
      },
      "scope": {
        "$ref": "#/context/definitions/scopes/development"
      },
      "offset": -1
    }
  }
}
```

## Guarantees

### 75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY_WRAPPER
At least 75% of started stories must match a creation of a branch within a day.
``` json
{
  "id": "75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY_WRAPPER",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of started stories(PT) must match a creation of a branch (GH) within a day.",
  "description": "At least 75% of started stories must match a creation of a branch within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_NEWBRANCHWR_STARTEDSTORIES >= 75",
      "with": {
        "PERCENTAGE_NEWBRANCHWR_STARTEDSTORIES": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY
At least 75% of started stories must match a creation of a branch within a day.
``` json
{
  "id": "75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of started stories(PT) must match a creation of a branch (GH) within a day.",
  "description": "At least 75% of started stories must match a creation of a branch within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_NEWBRANCH_STARTEDSTORIES >= 75",
      "with": {
        "PERCENTAGE_NEWBRANCH_STARTEDSTORIES": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY_BIND
At least 75% of started stories must match a creation of a branch within a day.
``` json
{
  "id": "75_PERCENT_NEWBRANCH_STARTED_STORIES_WITHIN_A_DAY_BIND",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of started stories(PT) must match a creation of a branch (GH) within a day.",
  "description": "At least 75% of started stories must match a creation of a branch within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND >= 75",
      "with": {
        "PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_OPEN_FINSH_STORIES_WITHIN_A_DAY
At least 75% of finished stories must match the creation of a PR within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_OPEN_FINSH_STORIES_WITHIN_A_DAY",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of finished stories(PT) must match creation of a PR within a day.",
  "description": "At least 75% of finished stories must match the creation of a PR within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_OPENPR_FINISHEDSTORIES >= 75",
      "with": {
        "PERCENTAGE_OPENPR_FINISHEDSTORIES": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_OPEN_FINSH_STORIES_WITHIN_A_DAY_BIND
At least 75% of finished stories must match the creation of a PR within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_OPEN_FINSH_STORIES_WITHIN_A_DAY_BIND",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of finished stories(PT) must match creation of a PR within a day.",
  "description": "At least 75% of finished stories must match the creation of a PR within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_OPENPR_FINISHEDSTORIES_BIND >= 75",
      "with": {
        "PERCENTAGE_OPENPR_FINISHEDSTORIES_BIND": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_MERGE_DELVR_STORIES_WITHIN_A_DAY
At least 75% of delivered stories must match the merge of a PR into master within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_MERGE_DELVR_STORIES_WITHIN_A_DAY",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of delivered stories(PT) must match a the merge of a PR into master within a day.",
  "description": "At least 75% of delivered stories must match the merge of a PR into master within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_MERGEPR_DELIVEREDSTORIES >= 75",
      "with": {
        "PERCENTAGE_MERGEPR_DELIVEREDSTORIES": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_MERGE_DELVR_STORIES_WITHIN_A_DAY_BIND
At least 75% of delivered stories must match the merge of a PR into master within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_MERGE_DELVR_STORIES_WITHIN_A_DAY_BIND",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of delivered stories(PT) must match a the merge of a PR into master within a day.",
  "description": "At least 75% of delivered stories must match the merge of a PR into master within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_MERGEPR_DELIVEREDSTORIES_BIND >= 75",
      "with": {
        "PERCENTAGE_MERGEPR_DELIVEREDSTORIES_BIND": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_MERGE_DEPLOY_WITHIN_A_DAY
At least 75% of delivered stories must match the merge of a PR into master within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_MERGE_DEPLOY_WITHIN_A_DAY",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of delivered stories(PT) must match a the merge of a PR into master within a day.",
  "description": "At least 75% of delivered stories must match the merge of a PR into master within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_RELEASES_DELIVEREDSTORIES >= 75",
      "with": {
        "PERCENTAGE_RELEASES_DELIVEREDSTORIES": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### 75_PERCENT_MASTER_PR_MERGE_DEPLOY_WITHIN_A_DAY_BIND
At least 75% of delivered stories must match the merge of a PR into master within a day.
``` json
{
  "id": "75_PERCENT_MASTER_PR_MERGE_DEPLOY_WITHIN_A_DAY_BIND",
  "notes": "#### Description\r\n```\r\nTP-1: At least 75% of delivered stories(PT) must match a the merge of a PR into master within a day.",
  "description": "At least 75% of delivered stories must match the merge of a PR into master within a day.",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "PERCENTAGE_RELEASES_DELIVEREDSTORIES_BIND >= 75",
      "with": {
        "PERCENTAGE_RELEASES_DELIVEREDSTORIES_BIND": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### MORE_THAN_70_PERCENT_CC_CODE_COVERED
Extracted from CodeClimate test reports
``` json
{
  "id": "MORE_THAN_70_PERCENT_CC_CODE_COVERED",
  "notes": "#### Description\r\n```\r\nTP-1: More than 70% of coverage",
  "description": "Extracted from CodeClimate test reports",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "VALUE_CC_COVERAGE >= 70",
      "with": {
        "VALUE_CC_COVERAGE": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### MORE_THAN_70_PERCENT_CC_CODE_COVERED_OFFSET
Extracted from CodeClimate test reports
``` json
{
  "id": "MORE_THAN_70_PERCENT_CC_CODE_COVERED_OFFSET",
  "notes": "#### Description\r\n```\r\nTP-1: More than 70% of coverage OFFSET",
  "description": "Extracted from CodeClimate test reports",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "VALUE_OFFSET_CC_COVERAGE >= 70",
      "with": {
        "VALUE_OFFSET_CC_COVERAGE": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

### SUBSTRACTION_HIGHER_EQUAL_ZERO
Extracted from CodeClimate test reports
``` json
{
  "id": "SUBSTRACTION_HIGHER_EQUAL_ZERO",
  "notes": "#### Description\r\n```\r\nTP-1: More than 70% of coverage OFFSET",
  "description": "Extracted from CodeClimate test reports",
  "scope": {
    "$ref": "#/context/definitions/scopes/development"
  },
  "of": [
    {
      "scope": {
        "project": "1010101010"
      },
      "objective": "VALUE_CC_COVERAGE - VALUE_OFFSET_CC_COVERAGE >= 0",
      "with": {
        "VALUE_CC_COVERAGE": {},
        "VALUE_OFFSET_CC_COVERAGE": {}
      },
      "window": {
        "type": "static",
        "period": "daily",
        "initial": "2018-01-01"
      }
    }
  ]
}
```

