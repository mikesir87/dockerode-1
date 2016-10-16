// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import { Readable } from "stream";
import { Boolean, Callback, Dictionary } from "./util";
import { ServiceDefinition } from "./service";
import { IPAMConfig } from "./network";

/** Represents an Task. */
class Task {
    public modem: Object;
    public id: string;

    /**
     * Constructs a new Task instance.
     * 
     * @param modem     docker-modem.
     * @param id        Task's ID or name.
     */
    constructor(modem: Object, id: string);

    /**
     * Get information about this Task.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Task.TaskResult>): void;

    /** Does not query Docker. Only return `{"id":"someid"}`. */
    public inspect(): string;
}

namespace Task {
    export interface TaskResult {
        ID: string;
        Version: {
            Index: number;
        },
        CreatedAt: string;
        UpdatedAt: string;
        Spec: ServiceDefinition;
        ServiceID: string;
        Slot: number;
        NodeID: string;
        Status: {
            Timestamp: string;
            State: string;
            Message: string;
            ContainerStatus: {
                ContainerID: string;
                PID: number;
            };
        },
        DesiredState: string;
        NetworksAttachments: NetworkAttachment[];
    }

    export interface NetworkAttachment {
        Network: {
            ID: string;
            Version: {
                Index: 18
            },
            CreatedAt: string;
            UpdatedAt: string;
            Spec: {
                Name: string;
                Labels: Dictionary<string>;
                DriverConfiguration: {},
                IPAMOptions: {
                    Driver: string;
                    Config: IPAMConfig[];
                    Options: Dictionary<string>;
                }
            },
            DriverState: {
                Name: string;
                Options: Dictionary<string>;
            },
            IPAMOptions: {
                Driver: {
                    Name: string;
                },
                Configs: IPAMConfig[]
            }
        },
        Addresses: string[];
    }
}

export = Task;