// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import * as Modem from "docker-modem";
import { Readable } from "stream";

import { Boolean, Callback, AuthConfig } from "./util";
import { ContainerConfig, ExposedPort } from "./container";

/** Represents an Image. */
class Image {
    public modem: Modem;
    public name: string;
    
    /**
     * Constructs a new Image instance.
     * 
     * @param modem     docker-modem.
     * @param name      Image's name.
     */
    constructor(modem: Modem, name: string);

    /**
     * Get low-level information about this Image.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Image.ImageResult>): void;

    /**
     * Does not query Docker.
     * Only return {"id":"someid"} as String.
     */
    public inspect(): string;
    
    /**
     * Return the history of this Image.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public history(callback: Callback<Image.HistoryResult[]>): void;

    /**
     * Get a tarball containing all images.
     * 
     * @param callback  Callback with data stream.
     */
    public get(callback: Callback<Readable>): void;

    /**
     * Push this Image on the registry.
     * If you wish to push an image on to a private registry, that image must already have a tag into a `repository` which references that registry `hostname` and `port`.
     * This `repository` name should then be used in the URL.
     * This duplicates the command line’s flow.
     * The push is cancelled if the HTTP connection is closed.
     * 
     * @param callback  Callback which will be called when call ends.
     * @param [auth]    Registry authentication.
     */
    public push(callback: Callback<Readable>, auth?: AuthConfig): void;
    /**
     * Push this Image on the registry.
     * If you wish to push an image on to a private registry, that image must already have a tag into a `repository` which references that registry `hostname` and `port`.
     * This `repository` name should then be used in the URL.
     * This duplicates the command line’s flow.
     * The push is cancelled if the HTTP connection is closed.
     * 
     * @param opts      Image push options.
     * @param callback  Callback which will be called when call ends.
     * @param [auth]    Registry authentication.
     */
    public push(opts: Image.PushOptions, callback: Callback<Readable>, auth?: AuthConfig): void;

    /**
     * Tag this Image into a repository.
     * 
     * @param opts      Image tag options (like `repo`).
     * @param callback  Callback which will be called when call ends.
     */
    public tag(opts: Image.TagOptions, callback: Callback<void>): void;

    /**
     * Remove this Image from the filesystem.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<Image.RemoveResult[]>): void;
    /**
     * Remove this Image from the filesystem.
     * 
     * @param opts      Image remove options.
     * @param callback  Callback which will be called when call ends.
     */
    public remove(opts: Image.RemoveOptions, callback: Callback<Image.RemoveResult[]>): void;

}

namespace Image {
    export interface ImageResult {
        Id: string;
        Container: string;
        Comment: string;
        Os: string;
        Architecture: string;
        Parent: string;
        ContainerConfig: ContainerConfig;
        DockerVersion: string;
        VirtualSize: number;
        Size: number;
        Author: string;
        Created: string;
        GraphDriver: {
            Name: string;
            Data: any
        };
        RepoDigests: string[];
        RepoTags: string[];
        Config: ContainerConfig;
        RootFS: {
            Type: string;
            Layers: string[];
        };
    }

    export interface HistoryResult {
        Id: string;
        Created: number;
        CreatedBy: string;
        Tags: string[];
        Size: number;
        Comment: string;
    }
    
    export interface PushOptions {
        /** The tag to associate with the image on the registry. This is optional. */
        tag?: string;
    }
    
    export interface TagOptions {
        /** The repository to tag in. */
        repo?: string;
        /** The new tag name. */
        tag?: string;
    }
    
    export interface RemoveOptions {
        /** `1`/`True`/`true` or `0`/`False`/`false`, default `false`. */
        force?: Boolean;
        /** `1`/`True`/`true` or `0`/`False`/`false`, default `false`. */
        noprune?: Boolean;
    }

    export type RemoveResult = { Untagged: string; } | { Deleted: string; };
}

export = Image;
