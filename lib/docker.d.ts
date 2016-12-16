// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import * as Modem from "docker-modem";
import { EventEmitter } from "events";
import { Readable, Duplex, Writable } from "stream";

import * as Container from "./container";
import * as Image from "./image";
import * as Volume from "./volume";
import * as Network from "./network";
import * as Service from "./service";
import * as Task from "./task";
import * as Node from "./node";
import * as Exec from "./exec";

import { Boolean, Callback, Dictionary, Filters, Timestamp, AuthConfig } from "./util";

class Docker extends EventEmitter {
    public modem: Modem;

    constructor(options?: Docker.SocketOptions | Docker.HostOptions);

    /**
     * Create an image either by pulling it from the registry.
     * 
     * @param opts      Image create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createImage(opts: Docker.CreateImageOptions, callback: Callback<Readable>);
    
    /**
     * Create an image either by pulling it from the registry.
     * 
     * @param auth      Authentication options.
     * @param opts      Image create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createImage(auth: AuthConfig, opts: Docker.CreateImageOptions, callback: Callback<Readable>);

    /**
     * Load a tarball with a set of images and tags into docker.
     * 
     * @param file      File to load image from.
     * @param callback  Callback which will be called when call ends.
     */
    public loadImage(file: string, callback: Callback<Readable>);
    /**
     * Load a tarball with a set of images and tags into docker.
     * 
     * @param file      File to load image from.
     * @param opts      Image load options.
     * @param callback  Callback which will be called when call ends.
     */
    public loadImage(file: string, opts: Docker.LoadImageOptions, callback: Callback<Readable>);

    /**
     * Create an image either by importing it.
     * 
     * @param file      File to load image from.
     * @param callback  Callback which will be called when call ends.
     */
    public importImage(file: string, callback: Callback<Readable>);
    /**
     * Create an image either by importing it.
     * 
     * @param file      File to load image from.
     * @param opts      Image import options.
     * @param callback  Callback which will be called when call ends.
     */
    public importImage(file: string, opts: Docker.CreateImageOptions, callback: Callback<Readable>);

    /**
     * Build an image from a Dockerfile.
     * 
     * @param file      Tar stream to build image from.
     * @param callback  Callback which will be called when call ends.
     */
    public buildImage(file: string, callback: Callback<Readable>);
    /**
     * Build an image from a Dockerfile.
     * 
     * @param file      Tar stream to build image from.
     * @param opts      Image build options.
     * @param callback  Callback which will be called when call ends.
     */
    public buildImage(file: string, opts: Docker.BuildImageOptions, callback: Callback<Readable>);

    /**
     * Create an image either by pulling it from the registry.
     * 
     * @param opts      Image create options.
     * @param callback  Callback which will be called when call ends.
     */
    public searchImages(opts: Docker.SearchImagesOptions, callback: Callback<Docker.SearchImagesResult[]>);

    /**
     * Validate credentials for a registry and get identity token, if available, for accessing the registry without password.
     * 
     * @param opts      Container create options.
     * @param callback  Callback which will be called when call ends.
     */
    public checkAuth(opts: Docker.CheckAuthOptions, callback: Callback<Docker.CheckAuthResult>);

    /**
     * Get a Container by ID or name.
     * 
     * @param id        Container's ID or name.
     */
    public getContainer(id: string): Container;
    
    /**
     * Get an Image by name.
     * 
     * @param name      Image's name.
     */
    public getImage(name: string): Image;
    
    /**
     * Get an Volume by name.
     * 
     * @param name      Volume's name.
     */
    public getVolume(name: string): Volume;
    
    /**
     * Get a Service by ID or name.
     * 
     * @param id        Service's ID or name.
     */
    public getService(id: string): Service;
    
    /**
     * Get a Task by ID.
     * 
     * @param id        Task's ID.
     */
    public getTask(id: string): Task;
    
    /**
     * Get a Node by ID.
     * 
     * @param id        Node's ID.
     */
    public getNode(id: string): Node;
    
    /**
     * Get a Network by ID or name.
     * 
     * @param id        Network's ID or name.
     */
    public getNetwork(id: string): Network;
    
    /**
     * Get a Exec by ID.
     * 
     * @param id        Exec's ID.
     */
    public getExec(id: string): Exec;
    
    /**
     * List containers.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listContainers(callback: Callback<Container.ContainerListItem[]>): void;
    /**
     * List containers.
     * 
     * @param opts      Containers list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listContainers(opts: Docker.ContainerListOptions, callback: Callback<Container.ContainerListItem[]>): void;

    /**
     * List images.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listImages(callback: Callback<Image.ImageResult[]>): void;
    /**
     * List images.
     * 
     * @param opts      Images list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listImages(opts: Docker.ImageListOptions, callback: Callback<Image.ImageResult[]>): void;

    /**
     * List services.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listServices(callback: Callback<Service.ServiceResult[]>): void;
    /**
     * List services.
     * 
     * @param opts      Service list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listServices(opts: Docker.ServiceListOptions, callback: Callback<Service.ServiceResult[]>): void;

    /**
     * List nodes.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listNodes(callback: Callback<Node.NodeResult[]>): void;

    /**
     * List tasks.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listTasks(callback: Callback<Task.TaskResult[]>): void;
    /**
     * List tasks.
     * 
     * @param opts      Task list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listTasks(opts: Docker.TaskListOptions, callback: Callback<Task.TaskResult[]>): void;

    /**
     * List volumes.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listVolumes(callback: Callback<Volume.VolumeResult>): void;
    /**
     * List volumes.
     * 
     * @param opts      Volume list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listVolumes(opts: Docker.VolumeListOptions, callback: Callback<Volume.VolumeResult>): void;

    /**
     * List networks.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public listNetworks(callback: Callback<Network.NetworkResult>): void;
    /**
     * List networks.
     * 
     * @param opts      Network list options.
     * @param callback  Callback which will be called when call ends.
     */
    public listNetworks(opts: Docker.NetworkListOptions, callback: Callback<Network.NetworkResult>): void;

    /**
     * Create a container.
     * 
     * @param opts      Container create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createContainer(opts: Docker.CreateContainerOptions, callback: Callback<Container>);
    
    /**
     * Create a Volume.
     * 
     * @param opts      Volume create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createVolume(opts: Docker.CreateVolumeOptions, callback: Callback<Volume>);
    
    /**
     * Create a service.
     * When using this endpoint to create a service using a private repository from the registry, the `X-Registry-Auth` header must be used to include a base64-encoded AuthConfig object.
     * Refer to the create an image section for more details.
     * 
     * @param opts      Service create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createService(opts: Docker.CreateServiceOptions, callback: Callback<Service>);
    
    /**
     * Create a service.
     * When using this endpoint to create a service using a private repository from the registry, the `X-Registry-Auth` header must be used to include a base64-encoded AuthConfig object.
     * Refer to the create an image section for more details.
     * 
     * @param auth      Authentication options.
     * @param opts      Service create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createService(auth: AuthConfig, opts: Docker.CreateServiceOptions, callback: Callback<Service>);

    /**
     * Create a Network.
     * 
     * @param opts      Network create options.
     * @param callback  Callback which will be called when call ends.
     */
    public createNetwork(opts: Docker.CreateNetworkOptions, callback: Callback<Network>);
    
    /**
     * Display system-wide information.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public info(callback: Callback<Docker.InfoResult>): void;

    /**
     * Show the docker version information.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public version(callback: Callback<Docker.VersionResult>): void;

    /**
     * Ping the docker server
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public ping(callback: Callback<"OK">): void;

    /**
     * Monitor Docker’s events.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public getEvents(callback: Callback<Docker.EventResult[]>): void;
    /**
     * Monitor Docker’s events.
     * 
     * @param opts      Docker's events list options.
     * @param callback  Callback which will be called when call ends.
     */
    public getEvents(opts: Docker.GetEventOptions, callback: Callback<Docker.EventResult[]>): void;

    /**
     * Pull is a wrapper around parsing out the tag from the image.
     * (which create image cannot do but run can for whatever reasons) and create image overloading.
     * 
     * @param repoTag   The repository tag.
     * @param callback  Callback which will be called when call ends.
     * @param [auth]    Authentication configuration for this pull.
     */
    public pull(repoTag: string, callback: Callback<Readable>, auth?: AuthConfig): void;
    /**
     * Pull is a wrapper around parsing out the tag from the image.
     * (which create image cannot do but run can for whatever reasons) and create image overloading.
     * 
     * @param repoTag   The repository tag.
     * @param opts      Docker pull options.
     * @param callback  Callback which will be called when call ends.
     * @param [auth]    Authentication configuration for this pull.
     */
    public pull(repoTag: string, opts: Docker.CreateImageOptions, callback: Callback<Readable>, auth?: AuthConfig): void;

    /**
     * Like run command from Docker's CLI.
     * 
     * @param image         Image name to be used.
     * @param cmd           Command to run in array format.
     * @param streamo       Output stream
     * @param callback  Callback which will be called when call ends.
     */
    public run(image: string, cmd: string[], streamo: NodeJS.WritableStream | NodeJS.WritableStream[], callback: (err: Error, data: Container.WaitResult, container: Container) => void): EventEmitter;
    
    /**
     * Like run command from Docker's CLI.
     * 
     * @param image         Image name to be used.
     * @param cmd           Command to run in array format.
     * @param streamo       Output stream
     * @param startOptions  Container start options.
     * @param callback  Callback which will be called when call ends.
     */
    public run(image: string, cmd: string[], streamo: NodeJS.WritableStream | NodeJS.WritableStream[], startOptions: Container.StartOptions, callback: (err: Error, data: Container.WaitResult, container: Container) => void): EventEmitter;
    
    /**
     * Like run command from Docker's CLI.
     * 
     * @param image         Image name to be used.
     * @param cmd           Command to run in array format.
     * @param streamo       Output stream
     * @param createOptions Container create options.
     * @param callback  Callback which will be called when call ends.
     */
    public run(image: string, cmd: string[], streamo: NodeJS.WritableStream | NodeJS.WritableStream[], createOptions: Docker.CreateContainerOptions, callback: (err: Error, data: Container.WaitResult, container: Container) => void): EventEmitter;
    
    /**
     * Like run command from Docker's CLI.
     * 
     * @param image         Image name to be used.
     * @param cmd           Command to run in array format.
     * @param streamo       Output stream
     * @param createOptions Container create options.
     * @param startOptions  Container start options.
     * @param callback  Callback which will be called when call ends.
     */
    public run(image: string, cmd: string[], streamo: NodeJS.WritableStream | NodeJS.WritableStream[], createOptions: Docker.CreateContainerOptions, startOptions: Container.StartOptions, callback: (err: Error, data: Container.WaitResult, container: Container) => void): EventEmitter;
    
    
    /**
     * Initialize a new swarm
     * 
     * @param opts      Swarm init options.
     * @param callback  Callback which will be called when call ends.
     */
    public swarmInit(opts: Docker.SwarmInitOptions, callback: Callback<string>): void;

    /**
     * Join an existing swarm.
     * 
     * @param opts      Swarm join options.
     * @param callback  Callback which will be called when call ends.
     */
    public swarmJoin(opts: Docker.SwarmJoinOptions, callback: Callback<void>): void;

    /**
     * Leave swarm.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public swarmLeave(callback: Callback<void>): void;
    /**
     * Leave swarm.
     * 
     * @param opts      Swarm leave options.
     * @param callback  Callback which will be called when call ends.
     */
    public swarmLeave(opts: Docker.SwarmLeaveOptions, callback: Callback<void>): void;

    /**
     * Update swarm.
     * 
     * @param opts      Swarm update options.
     * @param callback  Callback which will be called when call ends.
     */
    public swarmUpdate(opts: Docker.SwarmUpdateOptions, callback: Callback<void>): void;

    /**
     * Inspect swarm.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public swarmInspect(callback: Callback<Docker.SwarmDefinition>): void;


    /* EventEmitter Options */
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
}

namespace Docker {
    export interface SocketOptions {
        socketPath?: string;
    }
    export interface HostOptions {
        protocol?: string;
        host: string;
        port: number;
        ca?: Buffer;
        cert?: Buffer;
        key?: Buffer;
    }


    export interface CreateImageOptions {
        /**
         * Name of the image to pull.
         * The name may include a tag or digest.
         * This parameter may only be used when pulling an image.
         * The pull is cancelled if the HTTP connection is closed.
         */
        fromImage?: string;
        /**
         * Source to import.
         * The value may be a URL from which the image can be retrieved or - to read the image from the request body.
         * This parameter may only be used when importing an image.
         */
        fromSrc?: string;
        /**
         * Repository name given to an image when it is imported.
         * The repo may include a tag.
         * This parameter may only be used when importing an image.
         */
        repo?: string;
        /**
         * Tag or digest.
         * If empty when pulling an image, this causes all tags for the given image to be pulled.
         */
        tag?: string;
    }

    export interface LoadImageOptions {
        /** Boolean value, suppress progress details during load. Defaults to `0` / `false` if omitted. */
        quiet?: Boolean;
    }

    export interface BuildImageOptions {
        /** Path within the build context to the `Dockerfile`. This is ignored if remote is specified and points to an external `Dockerfile`. */
        dockerfile?: string;
        /** 
         * A name and optional tag to apply to the image in the `name:tag` format. 
         * If you omit the `tag` the default `latest` value is assumed.
         * You can provide one or more `t` parameters.
         */
        t?: string | string[];
        /**
         * A Git repository URI or HTTP/HTTPS context URI.
         * If the URI points to a single text file, the file’s contents are placed into a file called Dockerfile and the image is built from that file.
         * If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build.
         * If the URI points to a tarball and the dockerfile parameter is also specified, there must be a file with the corresponding path inside the tarball.
         */
        remote?: string;
        /** Suppress verbose build output. */
        q?: Boolean;
        /** Do not use the cache when building the image. */
        nocache?: Boolean;
        /** Attempt to pull the image even if an older image exists locally. */
        pull?: Boolean;
        /** Remove intermediate containers after a successful build (default behavior). */
        rm?: Boolean;
        /** Always remove intermediate containers (includes `rm`). */
        forcerm?: Boolean;
        /** Set memory limit for build. */
        memory?: number;
        /** Total memory (memory + swap), `-1` to enable unlimited swap. */
        memswap?: number;
        /** CPU shares (relative weight). */
        cpushares?: number;
        /** CPUs in which to allow execution (e.g., `0-3`, `0,1`). */
        cpusetcpus?: string;
        /** The length of a CPU period in microseconds. */
        cpuperiod?: number;
        /** Microseconds of CPU time that the container can get in a CPU period. */
        cpuquota?: number;
        /**
         * JSON map of string pairs for build-time variables.
         * Users pass these values at build-time.
         * Docker uses the buildargs as the environment context for command(s) run via the Dockerfile’s RUN instruction or for variable expansion in other Dockerfile instructions.
         * This is not meant for passing secret values. Read more about the buildargs instruction
         */
        buildargs?: Dictionary<string>;
        /** Size of `/dev/shm` in bytes. The size must be greater than `0`. If omitted the system uses `64MB`. */
        shmsize?: number;
        /** JSON map of string pairs for labels to set on the image. */
        labels?: Dictionary<string>;
    }

    export interface SearchImagesOptions {
        /** Term to search. */
        term: string;
        /** Maximum returned search results. */
        limit?: number;
        /** 
         * A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.
         * Available filters:
         *  - `stars=<number>`
         *  - `is-automated=(true|false)`
         *  - `is-official=(true|false)`
         */
        filters?: string | Dictionary<string>;
    }

    export interface SearchImagesResult {
        name: string;
        description: string;
        is_official: boolean;
        is_automated: boolean;
        star_count: number;
    }
    
    export interface CheckAuthOptions {
        username: string;
        password: string;
        serveraddress?: string;
        email?: string;
    }

    export interface CheckAuthResult {
        Status: string;
        IdentityToken: string;
    }

    export interface ContainerListOptions {
        /** Show all containers. Only running containers are shown by default (i.e., this defaults to `false`). */
        all?: Boolean;
        /** Show `limit` last created containers, include non-running ones. */
        limit?: number;
        /** Show only containers created since Id, include non-running ones. */
        since?: string;
        /** Show only containers created before Id, include non-running ones. */
        before?: string;
        /** Show the containers sizes. */
        size?: Boolean;
        /**
         * A JSON encoded value of the filters (a `map[string][]string`) to process on the containers list.
         * Available filters:
         *  - `exited=<int>`; – containers with exit code of `<int>`
         *  - `status=(created restarting running paused exited dead)`
         *  - `label=key` or `label="key=value"` of a container label
         *  - `isolation=(default process hyperv)` (Windows daemon only)
         *  - `ancestor`=(`<image-name>``[:<tag>]`, `<image id>` or `<image@digest>`)
         *  - `before`=(`<container id>` or `<container name>`)
         *  - `since`=(`<container id>` or `<container name>`)
         *  - `volume`=(`<volume name>` or `<mount point destination>`)
         *  - `network`=(`<network id>` or `<network name>`)
         */
        filters?: Filters;
    }

    export interface ImageListOptions {
        /** 1/True/true or 0/False/false, default `false`. */
        all?: Boolean;
        /** 
         * A JSON encoded value of the filters (a map[string][]string) to process on the images list.
         * Available filters:
         *  - `dangling=true`
         *  - `label=key` or `label="key=value"` of an image label
         *  - `before`=(`<image-name>[:<tag>]`, `<image id>` or `<image@digest>`)
         *  - `since`=(`<image-name>[:<tag>]`, `<image id>` or `<image@digest>`)
         */
        filters?: Filters;
        /** Only return images with the specified name. */
        filter?: string;
    }

    export interface ServiceListOptions {
        /**
         * a JSON encoded value of the filters (a `map[string][]string`) to process on the services list. 
         * Available filters:
         *  - `id=<node id>`
         *  - `name=<node name>`
         */
        filters?: Filters;
    }

    export interface NodeListOptions {
        /**
         * a JSON encoded value of the filters (a map[string][]string) to process on the nodes list.
         * Available filters:
         *  - `id=<node id>`
         *  - `name=<node name>`
         *  - `membership=(pending accepted rejected)`
         *  - `role=(worker	manager)`
         */
        filters?: Filters;
    }
    
    export interface TaskListOptions {
        /**
         * a JSON encoded value of the filters (a map[string][]string) to process on the nodes list.
         * Available filters:
         *  - `id=<task id>`
         *  - `name=<task name>`
         *  - `service=<service name>`
         *  - `node=<node id>`
         *  - `label=key` or `label="key=value"`
         *  - `desired-state=(running | shutdown | accepted)`
         */
        filters?: Filters;
    }
    
    export interface VolumeListOptions {
        /**
         * a JSON encoded value of the filters (a map[string][]string) to process on the nodes list.
         * Available filters:
         *  - `name=<volume-name>`: Matches all or part of a volume name.
         *  - `dangling=<boolean>`: When set to true (or 1), returns all volumes that are “dangling” (not in use by a container). 
         *                          When set to false (or 0), only volumes that are in use by one or more containers are returned.
         *  - `driver=<volume-driver-name>`: Matches all or part of a volume driver name.
         */
        filters?: Filters;
    }
    
    export interface NetworkListOptions {
        /**
         * a JSON encoded value of the filters (a map[string][]string) to process on the nodes list.
         * Available filters:
         *  - `driver=<driver-name>`: Matches a network’s driver.
         *  - `id=<network-id>`: Matches all or part of a network id.
         *  - `label=<key>` or `label=<key>=<value>` of a network label.
         *  - `name=<network-name>`: Matches all or part of a network name.
         *  - `type=["custom"|"builtin"]`: Filters networks by type. The custom keyword returns all user-defined networks.
         */
        filters?: Filters;
    }
    
    export interface CreateContainerOptions extends Container.ContainerConfig {
        name?: string;
        HostConfig?: Container.HostConfig;
        NetworkingConfig?: {
            EndpointsConfig: Dictionary<{
                IPAMConfig?: {
                    IPv4Address?: string;
                    IPv6Address?: string;
                    LinkLocalIPs?: string[];
                },
                Links?: string[];
                Aliases?: string[];
            }>;
        };
    }

    export interface CreateVolumeOptions {
        /** The new volume’s name. If not specified, Docker generates a name. */
        Name: string;
        /** Name of the volume driver to use. Defaults to `local` for the name. */
        Driver?: string;
        /** A mapping of driver options and values. These options are passed directly to the driver and are driver specific. */
        DriverOpts?: Dictionary<string>;
        /** Labels to set on the volume, specified as a map: `{"key":"value","key2":"value2"}`. */
        Labels?: Dictionary<string>;
    }
    
    export interface CreateServiceOptions extends Service.ServiceDefinition {
    }

    export interface CreateNetworkOptions extends Network.NetworkDefinition {
    }

    export interface InfoResult {
        ID: string;
        Architecture: string;
        ClusterStore: string;
        CgroupDriver: string;
        Containers: number;
        ContainersRunning: number;
        ContainersStopped: number;
        ContainersPaused: number;
        CpuCfsPeriod: boolean;
        CpuCfsQuota: boolean;
        Debug: boolean;
        DockerRootDir: string;
        Driver: string;
        DriverStatus: string[][];
        ExperimentalBuild: boolean;
        HttpProxy: string;
        HttpsProxy: string;
        IPv4Forwarding: boolean;
        Images: number;
        IndexServerAddress: string;
        InitPath: string;
        InitSha1: string;
        KernelMemory: boolean;
        KernelVersion: string;
        Labels: string[];
        MemTotal: number;
        MemoryLimit: boolean;
        NCPU: number;
        NEventsListener: number;
        NFd: number;
        NGoroutines: number;
        Name: string;
        NoProxy: string;
        OomKillDisable: boolean;
        OSType: string;
        OperatingSystem: string;
        Plugins: {
            Volume: string[];
            Network: string[];
        },
        RegistryConfig: {
            IndexConfigs: Dictionary<RegistryConfig>;
            InsecureRegistryCIDRs: string[];
        },
        "SecurityOptions": string[];
        "ServerVersion": string;
        "SwapLimit": boolean;
        "SystemStatus": string[][];
        "SystemTime": string;
    }

    export interface RegistryConfig {
        Name: string;
        Official: boolean;
        Secure: boolean;
        Mirrors: string[];
    }

    export interface VersionResult {
        Version: string;
        Os: string;
        KernelVersion: string;
        GoVersion: string;
        GitCommit: string;
        Arch: string;
        ApiVersion: string;
        BuildTime: string;
        "Experimental": boolean;
    }

    export interface GetEventOptions {
        /** Timestamp. Show all events created since timestamp and then stream. */
        since?: Timestamp;
        /** Timestamp. Show events created until given timestamp and stop streaming. */
        until?: Timestamp;
        /**
         * A json encoded value of the filters (a `map[string][]string`) to process on the event list.
         * Available filters:
         *  - `container=<string | string[]>`; – container to filter
         *  - `event=<string | string[]>`; – event to filter
         *  - `image=<string | string[]>`; – image to filter
         *  - `label=<string | string[]>`; – image and container label to filter
         *  - `type=<string | string[]>`; – either container or image or volume or network or daemon
         *  - `volume=<string | string[]>`; – volume to filter
         *  - `network=<string | string[]>`; – network to filter
         *  - `daemon=<string | string[]>`; – daemon name or id to filter
         */
        filters?: Dictionary<string | string[]>;
    }

    export interface EventResult {
        status?: string;
        id?: string;
        from?: string;
        Type: string;
        Action: string;
        Actor: {
            ID: string;
            Attributes: Dictionary<string>;
        };
        time: number;
        timeNano: number;
    }

    export interface SwarmInitOptions {
        /** 
         * Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP).
         * This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`.
         * If the port number is omitted, the default swarm listening port is used.
         */
        ListenAddr?: string;
        /**
         * Externally reachable address advertised to other nodes.
         * This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`.
         * If the port number is omitted, the port number from the listen address is used.
         * If `AdvertiseAddr` is not specified, it will be automatically detected when possible.
         */
        AdvertiseAddr?: string;
        /** Force creation of a new swarm. */
        ForceNewCluster?: Boolean;
        /** Configuration settings for the new swarm. */
        Spec?: SwarmSpec;
    }

    export interface SwarmSpec {
        /** Configuration settings for the orchestration aspects of the swarm. */
        Orchestration?: {
            /** Maximum number of tasks history stored. */
            TaskHistoryRetentionLimit?: number;
        };
        /** Raft related configuration. */
        Raft?: {
            /** Number of logs entries between snapshot. */
            SnapshotInterval?: number;
            /** Number of snapshots to keep beyond the current snapshot. */
            KeepOldSnapshots?: number;
            /** Number of log entries to keep around to sync up slow followers after a snapshot is created. */
            LogEntriesForSlowFollowers?: number;
            /** Amount of ticks (in seconds) between each heartbeat. */
            HeartbeatTick?: number;
            /** Amount of ticks (in seconds) needed without a leader to trigger a new election. */
            ElectionTick?: number;
        };
        /** Configuration settings for the task dispatcher. */
        Dispatcher?: {
            /** The delay for an agent to send a heartbeat to the dispatcher. */
            HeartbeatPeriod?: number;
        };
        /** Certificate authority configuration. */
        CAConfig?: {
            /** Automatic expiry for nodes certificates. */
            NodeCertExpiry?: Boolean;
            /** Configuration for forwarding signing requests to an external certificate authority. */
            ExternalCA?: {
                /** Protocol for communication with the external CA (currently only `cfssl` is supported). */
                Protocol?: string;
                /** URL where certificate signing requests should be sent. */
                URL?: string;
                /** An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver. */
                Options?: Dictionary<string>;
            };
        };
    }

    export interface SwarmJoinOptions {
        /** Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). */
        ListenAddr: string;
        /**
         * Externally reachable address advertised to other nodes.
         * This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`.
         * If the port number is omitted, the port number from the listen address is used.
         * If `AdvertiseAddr` is not specified, it will be automatically detected when possible.
         */
        AdvertiseAddr?: string;
        /** Address of any manager node already participating in the swarm. */
        RemoteAddrs: string[];
        /** Secret token for joining this swarm. */
        JoinToken: string;
    }

    export interface SwarmLeaveOptions {
        /** Force leave swarm, even if this is the last manager or that it will break the cluster. */
        force?: Boolean;
    }

    export interface SwarmUpdateOptions extends SwarmSpec {
        /** Name of the Swarm. */
        Name: string;
        /** Tokens that can be used by other nodes to join the swarm. */
        JoinTokens?: SwarmJoinTokens;

        /** The version number of the swarm object being updated. This is required to avoid conflicting writes. */
        version?: number;
        /**  Set to `true` (or `1`) to rotate the worker join token. */
        rotateWorkerToken?: Boolean;
        /** Set to `true` (or `1`) to rotate the manager join token. */
        rotateManagerToken?: Boolean;
    }

    export interface SwarmJoinTokens {
        /** Token to use for joining as a worker. */
        Worker?: string;
        /** Token to use for joining as a manager. */
        Manager?: string;
    }

    export interface SwarmDefinition {
        ID: string;
        Version: {
            Index: number;
        };
        CreatedAt: string;
        UpdatedAt: string;
        Spec: SwarmSpec & { Name: string; TaskDefaults: any };
        JoinTokens : SwarmJoinTokens;
    }
}

export = Docker;
