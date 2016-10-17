// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import * as Modem from "docker-modem";
import { Readable, Duplex } from "stream";

import { Callback } from "./util";

/** Represents an Exec setup. */
class Exec {
    public modem: Modem;
    public id: string;
    
    /**
     * Constructs a new Exec instance.
     * 
     * @param modem     docker-modem
     * @param id        Exec's ID
     */
    constructor(modem: Modem, id: string);

    /**
     * Start this Exec instance.
     * 
     * @param opts      Exec start options.
     * @param callback  Callback with stream.
     */
    public start(opts: Exec.StartOptions, callback: Callback<Readable>): void;

    /**
     * Start this Exec instance.
     * 
     * @param opts      Exec start options.
     * @param callback  Callback with stream.
     */
    public start(opts: {stdin:true} & Exec.StartOptions, callback: Callback<Duplex>): void;

    /**
     * Resizes the `tty` session used by this Exec command.
     * The unit is number of characters.
     * This API is valid only if `tty` was specified as part of creating and starting the `exec` command.
     * 
     * @param opts      Exec resize options.
     * @param callback  Callback which will be called when call ends.
     */
    public resize(opts: Exec.ResizeOptions, callback: Callback<void>): void;

    /**
     * Get low-level information about this Exec instance.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Exec.InspectResult>): void;

    /**
     * Does not call Docker Remote API.
     * Returns a JSON representation of {"id":"someid"}
     */
    public inspect(): string;
}

namespace Exec {
    export interface StartOptions {
        hijack?: boolean;
        stdin?: boolean;
        /**
         * If `true`, this API returns after starting the `exec` command.
         * Otherwise, this API sets up an interactive session with the `exec` command.
         */
        Detach?: Boolean;
        /** Allocate a pseudo-TTY. */
        Tty?: Boolean;
    }

    export interface ResizeOptions {
        /** Width of the `tty` session. */
        w?: number;
        /** Height of the `tty` session. */
        h?: number;
    }

    export interface InspectResult {
        ID: string;
        ContainerID: string;
        CanRemove: boolean;
        DetachKeys: string;
        ExitCode: number;
        OpenStdin: boolean;
        OpenStdout: boolean;
        OpenStderr: boolean;
        ProcessConfig: {
            arguments: string[];
            entrypoint: string;
            privileged: boolean;
            tty: boolean;
            user: string;
        };
        Running: boolean;
    }
}

export = Exec;