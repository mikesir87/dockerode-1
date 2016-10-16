// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import { Readable } from "stream";
import { Boolean, Callback, Dictionary } from "./util";
import { ContainerConfig, ExposedPort } from "./container";

/** Represents an Network. */
class Network {
    public modem: Object;
    public id: string;
    
    /**
     * Constructs a new Network instance.
     * 
     * @param modem     docker-modem.
     * @param id        Network's ID.
     */
    constructor(modem: Object, id: string);

    /**
     * Get low-level information about this Network.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Network.NetworkResult>): void;

    /** Does not query Docker. Only return `{"id":"someid"}`. */
    public inspect(): string;
    
    /**
     * Remove this Network.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<void>): void;
    /**
     * Remove this Network.
     * 
     * @param opts      Network remove options.
     * @param callback  Callback which will be called when call ends.
     */
    public remove(opts: Network.RemoveOptions, callback: Callback<void>): void;
    
    /**
     * Connects a container to a network.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public connect(callback: Callback<void>): void;
    /**
     * Connects a container to a network.
     * 
     * @param opts      Network connect options.
     * @param callback  Callback which will be called when call ends.
     */
    public connect(opts: Network.ConnectOptions, callback: Callback<void>): void;
    
    /**
     * Disconnects a container to a network.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public disconnect(callback: Callback<void>): void;
    /**
     * Disconnects a container to a network.
     * 
     * @param opts      Network disconnect options.
     * @param callback  Callback which will be called when call ends.
     */
    public disconnect(opts: Network.DisconnectOptions, callback: Callback<void>): void;
}

namespace Network {
    export interface NetworkResult extends NetworkDefinition {
        Id: string;
        Scope: string;
        Containers: Dictionary<ContainerConfig>;
    }

    export interface NetworkDefinition {
        /** The new network’s name. this is a mandatory field */
        Name: string;
        /** Requests daemon to check for networks with same name */
        CheckDuplicate?: Boolean;
        /** Name of the network driver plugin to use. Defaults to `bridge` driver. */
        Driver?: string;
        /** Enable IPv6 on the network. */
        EnableIPv6?: Boolean;
        /** Optional custom IP scheme for the network */
        IPAM?: Network.IPAM;
        /** Restrict external access to the network. */
        Internal?: boolean;
        /** Network specific options to be used by the drivers. */
        Options?: Dictionary<string>;
        /** Labels to set on the network, specified as a map: `{"key":"value" [,"key2":"value2"]}`. */
        Labels?: Dictionary<string>;
    }

    export interface IPAM {
        Driver?: string;
        Config?: Network.IPAMConfig[];
        Options?: Dictionary<string>;
    }

    export interface IPAMConfig {
        Subnet: string;
        Gateway: string;
        IPRange?: string;
    }

    export interface ContainerConfig {
        Name: string;
        EndpointID: string;
        MacAddress: string;
        IPv4Address: string;
        IPv6Address: string;
    }

    export interface RemoveOptions {
    }
    
    export interface ConnectOptions {
        /** Container `id`/`name` to be connected to the network. */
        container: string;
    }
    
    export interface DisconnectOptions {
        /** Container `id`/`name` to be disconnected from a network */
        Container: string;
        /** Force the container to disconnect from a network. */
        Force?: Boolean;
    }
}

export = Network;