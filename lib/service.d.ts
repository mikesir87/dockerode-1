// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import * as Modem from "docker-modem";

import { Boolean, Callback, Dictionary } from "./util";

/** Represents an Service. */
class Service {
    public modem: Modem;
    public id: string;
    
    /**
     * Constructs a new Service instance.
     * 
     * @param modem     docker-modem.
     * @param id        Service's ID or name.
     */
    constructor(modem: Modem, id: string);

    /**
     * Get information about this Service.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Service.ServiceResult>): void;

    /** Does not query Docker. Only return `{"id":"someid"}`. */
    public inspect(): string;
    
    /**
     * Stop and remove this Service.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<void>): void;

    /**
     * Update a service. 
     * When using this endpoint to create a service using a private repository from the registry, the `X-Registry-Auth` header can be used to update the authentication information for that is stored for the service. 
     * The header contains a base64-encoded AuthConfig object. Refer to the create an image section for more details.
     * 
     * @param opts      Service update options.
     * @param callback  Callback which will be called when call ends.
     */
    public update(opts: Service.UpdateOptions, callback: Callback<void>): void;
}

namespace Service {
    export interface ServiceResult {
        ID: string;
        Version: {
            Index: number;
        };
        CreatedAt: string;
        UpdatedAt: string;
        Spec: ServiceDefinition;
        Endpoint: {
            Spec: EndpointSpec;
            Ports?: Port[];
            VirtualIPs?: VirtualIP[];
        };
    }

    export interface UpdateOptions extends ServiceDefinition {
        version?: number;
    }

    export interface ServiceDefinition {
        /** User-defined name for the service. */
        Name?: string;
        /** A map of labels to associate with the service (e.g., `{"key":"value"[,"key2":"value2"]}`). */
        Labels?: Dictionary<string>;
        /** Specification of the tasks to start as part of the new service. */
        TaskTemplate?: TaskTemplate,
        /** Scheduling mode for the service (`replicated` or `global`, defaults to `replicated`). */
        Mode?: ReplicaMode | GlobalMode,
        /** Specification for the update strategy of the service. */
        UpdateConfig?: UpdateConfig;
        /** Array of network names or IDs to attach the service to. */
        Networks?: string[];
        /** Properties that can be configured to access and load balance a service. */
        EndpointSpec?: EndpointSpec;
    }

    export interface TaskTemplate {
        /** Container settings for containers started as part of this task. */
        ContainerSpec?: ContainerSpec;
        /** Resource requirements which apply to each individual container created as part of the service. */
        Resources?: Resources;
        /** Specification for the restart policy which applies to containers created as part of this service. */
        RestartPolicy?: RestartPolicy;
        /** An array of constraints. */
        Placements?: string[];
    }

    export interface ContainerSpec {
        /** A string specifying the image name to use for the container. */
        Image?: string;
        /** The command to be run in the image. */
        Command?: string;
        /** Arguments to the command. */
        Args?: string[];
        /** A list of environment variables in the form of `["VAR=value"[,"VAR2=value2"]]`. */
        Env?: string[];
        /** A string specifying the working directory for commands to run in. */
        Dir?: string;
        /** A string value specifying the user inside the container. */
        User?: string;
        /** A map of labels to associate with the service (e.g., `{"key":"value"[,"key2":"value2"]}`). */
        Labels?: Dictionary<string>;
        /** Specification for mounts to be added to containers created as part of the new service. */
        Mounts?: Mount[];
    }

    export interface Mount {
        /** Mount source (e.g. a volume name, a host path). */
        Source: string;
        /** Container path. */
        Target?: string;
        /** The mount type (`bind`, or `volume`). */
        Type?: "bind" | "volume";
        /** A boolean indicating whether the mount should be read-only. */
        ReadOnly?: Boolean;
        /** Optional configuration for the bind type */
        BindOptions?: {
            /** A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`. */
            Propagation?: "private" | "shared" | "slave" | "rprivate" | "rshared" | "rslave";
        };
        /** Optional configuration for the `volume` type. */
        VolumeOptions?: {
            /** A boolean indicating if volume should be populated with the data from the target. (Default `false`) */
            NoCopy?: Boolean;
            /** User-defined name and labels for the volume. */
            Labels?: Dictionary<string>;
            /** Map of driver-specific options. */
            DriverConfig?: DriverOptions[];
        };
        /** Amount of time to wait for the container to terminate before forcefully killing it. */
        StopGracePeriod?: number;
    }

    export interface DriverOptions {
        /** Name of the driver to use to create the volume. */
        Name: string;
        /** Key/value map of driver specific options. */
        Options: Dictionary<string>;
    }

    export interface Resources {
        /** Define resources limits. */
        Limits?: {
            /** CPU limit */
            CPU?: number;
            /** Memory limit */
            Memory?: number;
        };
        /** Define resources reservation. */
        Reservation ?: {
            /** CPU reservation */
            CPU?: number;
            /** Memory reservation */
            Memory?: number;
        };
    }

    export interface ResourceLimit {
        CPU?: number;
        Memory?: number;
    }

    export interface RestartPolicy {
        /** Condition for restart (`none`, `on-failure`, or `any`). */
        Condition?: "none" | "on-failure" | "any";
        /** Delay between restart attempts. */
        Delay?: number;
        /** Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored). */
        MaxAttempts?: number;
        /** Windows is the time window used to evaluate the restart policy (default value is `0`, which is unbounded). */
        Window?: number;
    }

    export interface UpdateConfig {
        /** Maximum number of tasks to be updated in one iteration (`0` means unlimited parallelism). */
        Parallelism?: number;
        /** Amount of time between updates. */
        Delay?: number;
    }

    export interface EndpointSpec {
        /** The mode of resolution to use for internal load balancing between tasks (`vip` or `dnsrr`). Defaults to `vip` if not provided. */
        Mode?: "vip" | "dnsrr";
        /**
         * List of exposed ports that this service is accessible on from the outside, in the form of: `{"Protocol": <"tcp"|"udp">, "PublishedPort": <port>, "TargetPort": <port>}`.
         * Ports can only be provided if vip resolution mode is used.
         */
        Ports?: Port[];
    }

    export interface Port {
        Protocol?: "tcp" | "udp";
        PublishedPort?: number;
        TargetPort?: number;
    }

    export interface ReplicaMode {
        Replicated: {
            Replicas?: number;
        };
    }

    export interface GlobalMode {
        Global: {};
    }

    export interface VirtualIP {
        NetworkID: string;
        Addr: string;
    }
}

export = Service;
