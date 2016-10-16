// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import { Callback, Dictionary } from "./util";

/** Represents an Node. */
class Node {
    public modem: Object;
    public id: string;
    
    /**
     * Constructs a new Node instance.
     * 
     * @param modem     docker-modem.
     * @param id        Node's ID.
     */
    constructor(modem: Object, id: string);
    
    /**
     * Get low-level information about this Node.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Node.NodeResult>): void;

    /** Does not query Docker. Only return `{"id":"someid"}`. */
    public inspect(): string;
    
    /**
     * Remove this Node from the swarm.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<void>): void;

}

namespace Node {
    export interface NodeResult {
        ID: string;
        Version: {
            Index: number;
        },
        CreatedAt: string;
        UpdatedAt: string;
        Spec: {
            Name: string;
            Role: string;
            Availability: string;
            Labels: Dictionary<string>;
        },
        Description: {
            Hostname: string;
            Platform: {
                Architecture: string;
                OS: string;
            },
            Resources: {
                NanoCPUs: number;
                MemoryBytes: number;
            },
            Engine: {
                EngineVersion: string;
                Labels: Dictionary<string>;
                Plugins: Plugin[];
            }
        },
        Status: {
            State: string;
        },
        ManagerStatus: {
            Leader: boolean;
            Reachability: string;
            Addr: string;
        }
    }

    export interface Plugin {
        Type: string;
        Name: string;
    }
}

export = Node;
