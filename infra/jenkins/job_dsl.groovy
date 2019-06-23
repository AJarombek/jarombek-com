/**
 * Create a Multi-Branch Pipeline Job for testing the jarombek-com project.
 * @author Andrew Jarombek
 * @since 6/6/2019
 */

multibranchPipelineJob("jarombek-com/jarombek-com-ci") {
    branchSources {
        git {
            remote("git@github.com:AJarombek/jarombek-com.git")
            credentialsId("865da7f9-6fc8-49f3-aa56-8febd149e72b")
            includes("*")
        }
    }
    factory {
        workflowBranchProjectFactory {
            scriptPath("")
        }
    }
    // Discard old branches after a certain branch count ['numToKeep()']
    // or number of days ['daysToKeep()']
    orphanedItemStrategy {
        discardOldItems {
            numToKeep(14)
        }
    }
}