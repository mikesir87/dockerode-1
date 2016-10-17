// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import * as Modem from "docker-modem";
import { Boolean, Callback, Dictionary } from "./util";

/** Represents an Volume. */
class Volume {
    public modem: Modem;
    public name: string;
    
    /**
     * Constructs a new Volume instance.
     * 
     * @param modem     docker-modem.
     * @param name        Volume's name.
     */
    constructor(modem: Modem, name: string);

    /**
     * Get information about this Volume.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Volume.InspectResult>): void;

    /** Does not query Docker. Only return `{"id":"someid"}`. */
    public inspect(): string;
    
    /**
     * Remove this volume.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<void>): void;

    /**
     * Remove this volume.
     * 
     * @param opts      Volume remove options.
     * @param callback  Callback which will be called when call ends.
     */
    public remove(opts: Volume.RemoveOptions, callback: Callback<void>): void;
}

namespace Volume {
    export interface VolumeResult {
        Volumes: InspectResult[];
        Warnings: string[];
    }

    export interface InspectResult {
        /** Name of the volume. */
        Name: string;
        /** Name of the volume driver used by the volume. */
        Driver: string;
        /** Mount path of the volume on the host. */
        Mountpoint: string;
        /** 
         * Low-level details about the volume, provided by the volume driver. 
         * Details are returned as a map with key/value pairs: `{"key":"value","key2":"value2"}`. 
         * The Status field is optional, and is omitted if the volume driver does not support this feature.
         */
        Status: Dictionary<string>;
        /** Labels set on the volume, specified as a map: `{"key":"value","key2":"value2"}`. */
        Labels: Dictionary<string>;
        /** Scope describes the level at which the volume exists, can be one of `global` for cluster-wide or `local` for machine level. The default is `local`. */
        Scope: "global" | "local";
    }

    export interface RemoveOptions {
    }
}

export = Volume;
