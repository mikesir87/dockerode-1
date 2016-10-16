// Type definitions for dockerode v2.3.1
// Project: https://github.com/apocas/dockerode
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/dockerode

import { Readable, Duplex } from "stream";
import { Boolean, Callback, Dictionary } from "./util";
import Exec = require("./exec");

/** Represents a Container. */
class Container {
    public modem: Object;
    public id: string;
    public defaultOptions: {
        top: Container.TopOptions;
        start: Container.StartOptions;
        commit: Container.CommitOptions;
        stop: Container.StopOptions;
        restart: Container.RestartOptions;
        resize: Container.ResizeOptions;
        attach: Container.AttachOptions;
        remove: Container.RemoveOptions;
        copy: Container.CopyOptions;
        kill: Container.KillOptions;
        exec: Container.ExecOptions;
        rename: Container.RenameOptions;
        log: Container.LogsOptions;
        stats: Container.StatsOptions;
        getArchive: Container.ArchiveOptions;
        infoArchive: Container.ArchiveOptions;
        putArchive: Container.ArchiveOptions;
        update: Container.UpdateOptions;
    };

    /**
     * Constructs a new Container instance.
     * 
     * @param modem     docker-modem.
     * @param id        Container's ID or name.
     */
    constructor(modem: Object, id: string);

    /**
     * Does not query Docker.
     * Only return {"id":"someid"} as String.
     */
    public inspect(): string;

    /**
     * Return low-level information for this Docker container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(callback: Callback<Container.ContainerResult>): void;
    /**
     * Return low-level information for this Docker container.
     * 
     * @param opts      Options for inspection.
     * @param callback  Callback which will be called when call ends.
     */
    public inspect(opts: Container.InspectOptions, callback: Callback<Container.ContainerResult>): void;

    /**
     * Rename this container.
     * 
     * @param opts      Options for renaming.
     * @param callback  Callback which will be called when call ends.
     */
    public rename(opts: Container.RenameOptions, callback: Callback<void>): void;

    /**
     * Update this container.
     * 
     * @param opts      Update options.
     * @param callback  Callback which will be called when call ends.
     */
    public update(opts: Container.UpdateOptions, callback: Callback<Container.UpdateResult>): void;

    /**
     * List processes running inside this container.
     * On Unix systems this is done by running the `ps` command.
     * This endpoint is not supported on Windows.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public top(callback: Callback<Container.TopResult>): void;
    /**
     * List processes running inside this container.
     * On Unix systems this is done by running the `ps` command.
     * This endpoint is not supported on Windows.
     * 
     * @param opts      Options (like `ps_args`).
     * @param callback  Callback which will be called when call ends.
     */
    public top(opts: Container.TopOptions, callback: Callback<Container.TopResult>): void;

    /**
     * Inspect changes on this container's filesystem
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public changes(callback: Callback<Container.ChangesResult[]>): void;

    /**
     * Export the content of this container to a `tar` archive.
     * 
     * @param callback  Callback with the octet-stream.
     */
    public export(callback: Callback<Readable>): void;

    /**
     * Start this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public start(callback: Callback<void>): void;
    /**
     * Start this container.
     * 
     * @param opts      Container start options.
     * @param callback  Callback which will be called when call ends.
     */
    public start(opts: Container.StartOptions, callback: Callback<void>): void;

    /**
     * Pause this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public pause(callback: Callback<void>): void;

    /**
     * Resume this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public unpause(callback: Callback<void>): void;

    /**
     * Set up an `exec` call to this running container.
     * 
     * @param opts      Container exec options.
     * @param callback  Callback which will be called when call ends.
     */
    public exec(opts: Container.ExecOptions, callback: Callback<Exec>): void;

    /**
     * Commit container changes.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public commit(callback: Callback<Container.CommitResult>): void;
    /**
     * Commit container changes.
     * 
     * @param opts      Container commit options (like `Hostname`).
     * @param callback  Callback which will be called when call ends.
     */
    public commit(opts: Container.CommitOptions, callback: Callback<Container.CommitResult>): void;

    /**
     * Stop this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public stop(callback: Callback<void>): void;
    /**
     * Stop this container.
     * 
     * @param opts      Container stop options (like `t`).
     * @param callback  Callback which will be called when call ends.
     */
    public stop(opts: Container.StopOptions, callback: Callback<void>): void;

    /**
     * Restart this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public restart(callback: Callback<void>): void;
    /**
     * Restart this container.
     * 
     * @param opts      Container restart options (like `t`).
     * @param callback  Callback which will be called when call ends.
     */
    public restart(opts: Container.RestartOptions, callback: Callback<void>): void;

    /**
     * Kill this container.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public kill(callback: Callback<void>): void;
    /**
     * Kill this container.
     * 
     * @param opts      Container kill options (like `signal`).
     * @param callback  Callback which will be called when call ends.
     */
    public kill(opts: Container.KillOptions, callback: Callback<void>): void;

    /**
     * Resize the TTY for this container.
     * The unit is number of characters.
     * You must restart the container for the resize to take effect.
     * 
     * @param opts      Container resize options.
     * @param callback  Callback which will be called when call ends.
     */
    public resize(opts: Container.ResizeOptions, callback: Callback<void>): void;

    /**
     * Attach to this container output (and optionnally input).
     * 
     * @param callback  Callback with stream.
     */
    public attach(callback: Callback<Duplex>): void;
    /**
     * Attach to this container output (and optionnally input).
     * 
     * @param opts      Container attach options.
     * @param callback  Callback with stream.
     */
    public attach(opts: Container.AttachOptions, callback: Callback<Duplex>): void;
    
    /**
     * Wait until this container's stop, then returns the exit code.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public wait(callback: Callback<Container.WaitResult>): void;

    /**
     * Remove this container from the filesystem.
     * 
     * @param callback  Callback which will be called when call ends.
     */
    public remove(callback: Callback<void>): void;
    /**
     * Remove this container from the filesystem.
     * 
     * @param opts      Container remove options (like `force`).
     * @param callback  Callback which will be called when call ends.
     */
    public remove(opts: Container.RemoveOptions, callback: Callback<void>): void;
    
    /**
     * Copy this container (WARNING! DEPRECATED SINCE REMOTE API 1.20).
     * 
     * @deprecated
     * @param callback  Callback with stream.
     */
    public copy(callback: Callback<Readable>): void;
    /**
     * Copy this container (WARNING! DEPRECATED SINCE REMOTE API 1.20).
     * 
     * @deprecated
     * @param opts      Container copy options (like `Resource`).
     * @param callback  Callback with stream.
     */
    public copy(opts: Container.CopyOptions, callback: Callback<Readable>): void;
    
    /**
     * Get an archive of a filesystem resource in this container.
     * 
     * @param opts      Archive options (like `path`).
     * @param callback  Callback with stream.
     */
    public getArchive(opts: Container.ArchiveOptions, callback: Callback<Readable>): void;
    
    /**
     * Retrieves information about files and folders in this container.
     * 
     * @param opts      Archive options (like `path`).
     * @param callback  Callback with stream.
     */
    public infoArchive(opts: Container.ArchiveOptions, callback: Callback<Container.ArchiveInformations>): void;
    
    /**
     * Put container archive.
     * 
     * @param file      Archive file to put.
     * @param opts      Archive options (like `path`).
     * @param callback  Callback with stream.
     */
    public putArchive(file: string, opts: Container.PutArchiveOptions, callback: Callback<Readable>): void;
    
    /**
     * Get `stdout` and `stderr` logs from the container `id`.
     * 
     * @param callback  Callback with stream.
     */
    public logs(callback: Callback<Readable>): void;
    /**
     * Get `stdout` and `stderr` logs from the container `id`.
     * 
     * @param opts      Container logs options.
     * @param callback  Callback with stream.
     */
    public logs(opts: Container.LogsOptions, callback: Callback<Readable>): void;
    
    /**
     * Get this container's stats.
     * 
     * @param callback  Callback with stream.
     */
    public stats(callback: Callback<Readable>): void;
    /**
     * Get this container's resource usage statistics (as a live stream).
     * 
     * @param opts      Container stats options.
     * @param callback  Callback with stream.
     */
    public stats(opts: Container.StatsOptions, callback: Callback<Readable>): void;
    /**
     * Get this container's resource usage statistics (not as stream).
     * 
     * @param opts      Container stats options.
     * @param callback  Callback with stream.
     */
    public stats(opts: {stream: 0|false} & Container.StatsOptions, callback: Callback<Container.StatsResult>): void;
}

namespace Container {
    export interface InspectOptions {
        /** `true` or `1` to return container size information. Default is `false` */
        size?: Boolean;
    }

    export interface ContainerResult {
        Id: string;
        Image: string;
        Name: string;

        AppArmorProfile: string;
        Args: string[];
        Config: ContainerConfig;
        Created: string;
        Driver: string;
        ExecIDs: string[];
        HostConfig: HostConfig;
        HostnamePath: string;
        HostsPath: string;
        LogPath: string;
        MountLabel: string;
        NetworkSettings: NetworkSettings;
        Path: string;
        ProcessLabel: string;
        ResolvConfPath: string;
        RestartCount: number;
        State: ContainerState;
        Mounts: ContainerMount[];
        SizeRw?: number;
        SizeRootFs?: number;
    }

    export interface ContainerListItem {
        Id: string;
        Names: string[];
        Image: string;
        ImageID: string;
        Command: string;
        Created: number;
        State: string;
        Status: string;
        Ports: Port[];
        Labels: Dictionary<string>;
        SizeRw: number;
        SizeRootFs: number;
        HostConfig: HostConfig;
        NetworkSettings: NetworkSettings;
        Mounts: Mount[];
    }

    export interface ContainerConfig {
        /** A string value containing the hostname to use for the container. This must be a valid RFC 1123 hostname. */
        Hostname?: string;
        /** A string value containing the domain name to use for the container. */
        Domainname?: string;
        /** A string value specifying the user inside the container. */
        User?: string;
        /** Boolean value, attaches to `stdin`. */
        AttachStdin?: Boolean;
        /** Boolean value, attaches to `stdout`. */
        AttachStdout?: Boolean;
        /** Boolean value, attaches to `stderr`. */
        AttachStderr?: Boolean;
        /** Boolean value, Attach standard streams to a `tty`, including `stdin` if it is not closed. */
        Tty?: boolean;
        /** Boolean value, opens `stdin`, */
        OpenStdin?: Boolean;
        /** Boolean value, close `stdin` after the 1 attached client disconnects. */
        StdinOnce?: boolean;
        /** A list of environment variables in the form of `["VAR=value"[,"VAR2=value2"]]`. */
        Env?: string[];
        /** Adds a map of labels to a container. To specify a map: `{"key":"value"[,"key2":"value2"]}`. */
        Labels?: Dictionary<string>;
        /** Command to run specified as a string or an array of strings. */
        Cmd?: string | string[];
        /** Set the entry point for the container as a string or an array of strings. */
        Entrypoint?: string;
        /** A string specifying the image name to use for the container. */
        Image?: string;
        /** An object mapping mount point paths (strings) inside the container to empty objects. */
        Volumes?: Dictionary<VolumeConfig>; 
        /** A string specifying the working directory for commands to run in. */
        WorkingDir?: string;
        /** Boolean value, when true disables networking for the container. */
        NetworkDisabled?: boolean;
        /** An object mapping ports to an empty object in the form of: `"ExposedPorts": { "<port>/<tcp|udp>: {}" }`. */
        ExposedPorts?: Dictionary<ExposedPort>;
        /** Signal to stop a container as a string or unsigned integer. `SIGTERM` by default. */
        StopSignal?: string;
        MacAddress?: string;
        OnBuild?: any;
    }

    export interface ExposedPort {
    }

    export interface VolumeConfig {
    }

    export interface HostConfig {
        /**
         * A list of volume bindings for this container. Each volume binding is a string in one of these forms:
         *  - host-src:container-dest to bind-mount a host path into the container. Both host-src, and container-dest must be an absolute path.
         *  - host-src:container-dest:ro to make the bind-mount read-only inside the container. Both host-src, and container-dest must be an absolute path.
         *  - volume-name:container-dest to bind-mount a volume managed by a volume driver into the container. container-dest must be an absolute path.
         *  - volume-name:container-dest:ro to mount the volume read-only inside the container. container-dest must be an absolute path.
         */
        Binds?: string[];
        /** A list of links for the container. Each link entry should be in the form of `container_name:alias`. */
        Links?: string[];

        /** Memory limit in bytes. (0 for no limit). */
        Memory?: number;
        /** Total memory limit (memory + swap); set `-1` to enable unlimited swap. You must use this with `memory` and make the swap value larger than `memory`. */
        MemorySwap?: number;
        /** Memory soft limit in bytes. */
        MemoryReservation?: number;
        /** Kernel memory limit in bytes. */
        KernelMemory?: number;
        /** An integer value containing the usable percentage of the available CPUs. (Windows daemon only) */
        CpuPercent?: number;
        /** An integer value containing the container’s CPU Shares (ie. the relative weight vs other containers). */
        CpuShares?: number;
        /** The length of a CPU period in microseconds. */
        CpuPeriod?: number;
        /** Microseconds of CPU time that the container can get in a CPU period. */
        CpuQuota?: number;
        /** String value containing the cgroups CpusetCpus to use. */
        CpusetCpus?: string;
        /** Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. */
        CpusetMems?: string;

        /** Maximum IO absolute rate in terms of IOps. */
        IOMaximumBandwidth?: number;
        /** Maximum IO absolute rate in terms of bytes per second. */
        IOMaximumIOps?: number;
        /** Block IO weight (relative weight) accepts a weight value between 10 and 1000. */
        BlkioWeight?: number;
        /** Block IO weight (relative device weight) in the form of: `"BlkioWeightDevice": [{"Path": "device_path", "Weight": weight}]` */
        BlkioWeightDevice?: BlkioDeviceWeight[]; 
        /** Limit read rate (bytes per second) from a device in the form of: `"BlkioDeviceReadBps": [{"Path": "device_path", "Rate": rate}]`, for example: `"BlkioDeviceReadBps": [{"Path": "/dev/sda", "Rate": "1024"}]"` */
        BlkioDeviceReadBps?: BlkioDeviceRate[]; 
        /** Limit write rate (bytes per second) to a device in the form of: `"BlkioDeviceWriteBps": [{"Path": "device_path", "Rate": rate}]`, for example: `"BlkioDeviceWriteBps": [{"Path": "/dev/sda", "Rate": "1024"}]"` */
        BlkioDeviceWriteBps?: BlkioDeviceRate[]; 
        /** Limit read rate (IO per second) from a device in the form of: `"BlkioDeviceReadIOps": [{"Path": "device_path", "Rate": rate}]`, for example: `"BlkioDeviceReadIOps": [{"Path": "/dev/sda", "Rate": "1000"}]` */
        BlkioDeviceReadIOps?: BlkioDeviceRate[]; 
        /** Limit write rate (IO per second) to a device in the form of: `"BlkioDeviceWriteIOps": [{"Path": "device_path", "Rate": rate}]`, for example: `"BlkioDeviceWriteIOps": [{"Path": "/dev/sda", "Rate": "1000"}]` */
        BlkioDeviceWriteIOps?: BlkioDeviceRate[];

        /** Tune a container’s memory swappiness behavior. Accepts an integer between 0 and 100. */
        MemorySwappiness?: number;
        /** Boolean value, whether to disable OOM Killer for the container or not. */
        OomKillDisable?: boolean;
        /** An integer value containing the score given to the container in order to tune OOM killer preferences. */
        OomScoreAdj?: number;
        /** Set the PID (Process) Namespace mode for the container; `"container:<name|id>"`: joins another container’s PID namespace `"host"`: use the host’s PID namespace inside the container */
        PidMode?: string;
        /** Tune a container’s pids limit. Set -1 for unlimited. */
        PidsLimit?: number;
        /** A map of exposed container ports and the host port they should map to. A JSON object in the form `{ <port>/<protocol>: [{ "HostPort": "<port>" }] }` Take note that port is specified as a string and not an integer value. */
        PortBindings?: Dictionary<PortBinding[]>;
        /** Allocates a random host port for all of a container’s exposed ports. Specified as a boolean value. */
        PublishAllPorts?: boolean;
        /** Gives the container full access to the host. Specified as a boolean value. */
        Privileged?: boolean;
        /** Mount the container’s root filesystem as read only. Specified as a boolean value. */
        ReadonlyRootfs?: boolean;
        
        /** A list of DNS servers for the container to use. */
        Dns?: string[];
        /** A list of DNS options. */
        DnsOptions?: string[];
        /**  A list of DNS search domains. */
        DnsSearch?: string[];
        /** A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form `["hostname:IP"]`. */
        ExtraHosts?: string[];
        /** A list of volumes to inherit from another container. Specified in the form `<container name>[:<ro|rw>]`. */
        VolumesFrom?: string[];

        /** A list of kernel capabilities to add to the container. */
        CapAdd?: string[];
        /** A list of kernel capabilities to drop from the container. */
        CapDrop?: string[];
        /** A list of additional groups that the container process will run as. */
        GroupAdd?: string[];

        /**
         * The behavior to apply when the container exits. 
         * The value is an object with a Name property of either :
         *  - "always" to always restart, 
         *  - "unless-stopped" to restart always except when user has manually stopped the container
         *  - "on-failure" to restart only when the container exit code is non-zero. 
         *     If on-failure is used, `MaximumRetryCount` controls the number of times to retry before giving up.
         * 
         * The default is not to restart. 
         * (optional) An ever increasing delay (double the previous delay, starting at 100mS) is added before each restart to prevent flooding the server.
         */
        RestartPolicy?: "always" | "on-failure" | "unless-stopped";
        /** If `on-failure` is used, it controls the number of times to retry before giving up. */
        MaximumRetryCount?: number;

        /** Sets the usernamespace mode for the container when usernamespace remapping option is enabled. supported values are: host. */
        UsernsMode?: string;
        /** 
         * Sets the networking mode for the container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`.
         * Any other value is taken as a custom network’s name to which this container should connect to.
         */
        NetworkMode?: "bridge" | "host" | "none" | string;
        /** A list of devices to add to the container specified as a JSON object in the form `{ "PathOnHost": "/dev/deviceName", "PathInContainer": "/dev/deviceName", "CgroupPermissions": "mrw"}`. */
        Devices?: Dictionary<string>;
        /** A list of ulimits to set in the container, specified as `{ "Name": <name>, "Soft": <soft limit>, "Hard": <hard limit> }`, for example: `Ulimits: { "Name": "nofile", "Soft": 1024, "Hard": 2048 }`. */
        Ulimits?: UlimitConfig[];
        /** A list of kernel parameters (sysctls) to set in the container, specified as `{ <name>: <Value> }`, for example: `{ "net.ipv4.ip_forward": "1" }`. */
        Sysctls?: Dictionary<string>;
        /** A list of string values to customize labels for MLS systems, such as SELinux. */
        SecurityOpt?: string[];
        /** Storage driver options per container. Options can be passed in the form `{"size":"120G"}`. */
        StorageOpt?: Dictionary<string>;
        /** 
         * Log configuration for the container, specified as a JSON object in the form `{ "Type": "<driver_name>", "Config": {"key1": "val1"}}.
         * Available types: `json-file`, `syslog`, `journald`, `gelf`, `fluentd`, `awslogs`, `splunk`, `etwlogs`, `none`.
         */
        LogConfig?: LogConfig;

        /** 
         * Path to `cgroups` under which the container’s cgroup is created. 
         * If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process.
         * Cgroups are created if they do not already exist.
         */
        CgroupParent?: string;
        /** Driver that this container users to mount volumes. */
        VolumeDriver?: string;
        /** Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB. */
        ShmSize?: number;
    }

    export interface BlkioDeviceWeight {
        Path: string;
        Weight: string | number;
    }

    export interface BlkioDeviceRate {
        Path: string;
        Rate: string | number;
    }

    export interface PortBinding {
        HostPort: string | number;
    }

    export interface UlimitConfig {
        Name: string;
        Soft: number;
        Hard: number;
    }

    export interface LogConfig {
        Type: string;
        Config: Object;
    }

    export interface NetworkSettings extends BaseNetwork {
        Bridge: string;
        SandboxID: string;
        HairpinMode: boolean;
        LinkLocalIPv6Address: string;
        LinkLocalIPv6PrefixLen: number;
        Ports: string[];
        SandboxKey: string;
        SecondaryIPAddresses: string[];
        SecondaryIPv6Addresses: string[];
        Networks: Dictionary<Network>;
    }

    export interface Network extends BaseNetwork {
        NetworkID: string;
        EndpointID: string;
    }

    export interface BaseNetwork {
        Gateway: string;
        GlobalIPv6Address: string;
        GlobalIPv6PrefixLen: number;
        IPAddress: string;
        IPPrefixLen: number;
        IPv6Gateway: string;
        MacAddress: string;
    }

    export interface ContainerState {
        Error: string;
        ExitCode: number;
        FinishedAt: string;
        OOMKilled: boolean;
        Dead: boolean;
        Paused: boolean;
        Pid: number;
        Restarting: boolean;
        Running: boolean;
        StartedAt: string;
        Status: string;
    }

    export interface ContainerMount {
        Name: string;
        Source: string;
        Destination: string;
        Driver: string;
        Mode: string;
        RW: boolean;
        Propagation: string;
    }

    export interface RenameOptions {
        /** New name for the container. */
        name: string;
    }

    export interface UpdateOptions {
        /** Block IO weight (relative weight) accepts a weight value between 10 and 1000. */
        BlkioWeight?: number;
        /** An integer value containing the container’s CPU Shares (ie. the relative weight vs other containers). */
        CpuShares?: number;
        /** The length of a CPU period in microseconds. */
        CpuPeriod?: number;
        /** Microseconds of CPU time that the container can get in a CPU period. */
        CpuQuota?: number;
        /** String value containing the cgroups CpusetCpus to use. */
        CpusetCpus?: string;
        /** Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. */
        CpusetMems?: string;
        /** Memory limit in bytes. (0 for no limit). */
        Memory?: number;
        /** Total memory limit (memory + swap); set `-1` to enable unlimited swap. You must use this with `memory` and make the swap value larger than `memory`. */
        MemorySwap?: number;
        /** Memory soft limit in bytes. */
        MemoryReservation?: number;
        /** Kernel memory limit in bytes. */
        KernelMemory?: number;
        RestartPolicy?: RestartPolicy;
    }

    export interface UpdateResult {
        Warnings: string[];
    }

    export interface TopOptions {
        /** `ps` arguments to use (e.g., `aux`), defaults to `-ef` */
        ps_aux?: string;
    }

    export interface TopResult {
        Titles: string[];
        Processes: string[];
    }

    export interface ChangesResult {
        /** Change's path. */
        Path: string;
        /**
         * Kind of change:
         *  - 0: Modify
         *  - 1: Add
         *  - 2: Delete
         */
        Kind: 0 | 1 | 2;
    }

    export interface StartOptions {
        /** 
         * Override the key sequence for detaching a container. 
         * Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, , or `_`.
         */
        detachKeys?: string;
    }

    export interface ExecOptions {
        /** Attaches to `stdin` of the `exec` command. */
        AttachStdin?: Boolean;
        /** Attaches to `stdout` of the `exec` command. */
        AttachStdout?: Boolean;
        /** Attaches to `stderr` of the `exec` command. */
        AttachStderr?: Boolean;
        /** Command to run specified as a string or an array of strings. */
        Cmd?: string | string[];
        /** 
         * Override the key sequence for detaching a container. 
         * Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, , or `_`.
         */
        DetachKeys?: string;
        /** Runs the exec process with extended privileges. */
        Privileged?: Boolean;
        /** Allocate a pseudo-TTY. */
        Tty?: Boolean;
        /** 
         * A string value specifying the user, and optionally, group to run the exec process inside the container.
         * Format is one of: `"user"`, `"user:group"`, `"uid"`, or `"uid:gid"`.
         */
        User?: string;
    }

    export interface CommitOptions {
        repo?: string;
        tag?: string;
        comment?: string;
        author?: string;
        pause?: Boolean;
        changes?: string;

        Hostname?: string;
        Domainname?: string;
        User?: string;
        AttachStdin?: boolean;
        AttachStdout?: boolean;
        AttachStderr?: boolean;
        Tty?: boolean;
        OpenStdin?: boolean;
        StdinOnce?: boolean;
        Env?: null,
        Cmd?: string;
        Mounts?: Mount[];
        Labels?: Dictionary<string>;
        WorkingDir?: string;
        NetworkDisabled?: boolean;
        ExposedPorts?: Dictionary<ExposedPort>;
    }

    export interface Port {
        PrivatePort: number;
        PublicPort: number;
        Type: "tcp" | "udp";
    }

    export interface Mount {
        Source: string;
        Destination?: string;
        Mode?: string;
        RW?: Boolean;
        Driver?: string;
        Propagation?: string;
    }

    export interface CommitResult {
        Id: string;
    }

    export interface StopOptions {
        /** Number of seconds to wait before killing the container */
        t?: number;
    }

    export interface RestartOptions {
        /** Number of seconds to wait before killing the container */
        t?: number;
    }

    export interface KillOptions {
        /** 
         * Signal to send to the container: `integer` or `string` like `SIGINT`.
         * When not set, `SIGKILL` is assumed and the call waits for the container to exit.
         */
        signal?: number | string;
    }

    export interface ResizeOptions {
        /** Height of `tty` session. */
        h: number;
        /** Width of `tty` session. */
        w: number;
    }

    export interface AttachOptions {
        /** 
         * Override the key sequence for detaching a container. 
         * Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, , or `_`.
         */
        detachKeys?: string;
        /** Return logs. Default `false`. */
        logs?: Boolean;
        /** Return stream. Default `false`. */
        stream?: Boolean;
        /** If `stream=true`, attach to `stdin`. Default `false`. */
        stdin?: Boolean;
        /** If `logs=true`, return `stdout` log, if `stream=true`, attach to `stdout`. Default `false`. */
        stdout?: Boolean;
        /** If `logs=true`, return `stderr` log, if `stream=true`, attach to `stderr`. Default `false`. */
        stderr?: Boolean;
        hijack?: Boolean;
    }

    export interface WaitResult {
        /** Container's exit code. */
        StatusCode: number;
    }
    
    export interface RemoveOptions {
        /** Remove the volumes associated to the container. Default `false`. */
        v?: Boolean;
        /** Kill then remove the container. Default `false`. */
        force?: Boolean;
    }

    export interface CopyOptions {

    }

    export interface ArchiveOptions {
        /**
         * Required. Resource in the container’s filesystem to archive.
         * If not an absolute path, it is relative to the container’s root directory. 
         * The resource specified by `path` must exist. 
         * To assert that the resource is expected to be a directory, `path` should end in `/` or `/.` (assuming a `path` separator of `/`).
         * If `path` ends in `/`. then this indicates that only the contents of the `path` directory should be copied.
         * A symlink is always resolved to its target.
         * 
         * Note: It is not possible to copy certain system files such as resources under /proc, /sys, /dev, and mounts created by the user in the container.
         */
        path: string;
    }

    export interface ArchiveInformations {
        name: string;
        size: number;
        mode: string;
        mtime: string;
        linkTarget: string;
    }

    export interface PutArchiveOptions extends ArchiveOptions {
        /** If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. */
        noOverwriteDirNonDir?: Boolean;
    }

    export interface LogsOptions {
        /** Show extra details provided to logs. Default `false`. */
        details?: Boolean;
        /** Return stream. Default `false`. */
        follow?: Boolean;
        /** Show `stdout` log. Default `false`. */
        stdout?: Boolean;
        /** Show `stderr` log. Default `false`. */
        stderr?: Boolean;
        /** UNIX timestamp (integer) to filter logs. Specifying a timestamp will only output log-entries since that timestamp. Default: `0` (unfiltered) */
        since?: number;
        /** Print timestamps for every log line. Default `false`. */
        timestamps?: Boolean;
        /** Output specified number of lines at the end of logs: `all` or `<number>`. Default `all`. */
        tail?: "all" | number;
    }

    export interface StatsOptions {
        /** `0` or `false` to pull stats once then disconnect. Default `true`. */
        stream?: Boolean;
    }

    export interface StatsResult {
        /** Date */
        read: string;
        pid_stats: Dictionary<number>;
        networks: Dictionary<NetworkStatistics>;
        memory_stats: MemoryStatistics;
        blkio_stats: Object;
        cpu_stats: CpuStatistics;
        /** Last read's CPU statistic, which is used for calculating the cpu usage percent. It is not the exact copy of the “cpu_stats” field. */
        precpu_stats: CpuStatistics;
    }

    export interface NetworkStatistics {
        rx_bytes: number;
        rx_dropped: number;
        rx_errors: number;
        rx_packets: number;
        tx_bytes: number;
        tx_dropped: number;
        tx_errors: number;
        tx_packets: number;
    }

    export interface MemoryStatistics {
        stats: {
            total_pgmajfault: number;
            cache: number;
            mapped_file: number;
            total_inactive_file: number;
            pgpgout: number;
            rss: number;
            total_mapped_file: number;
            writeback: number;
            unevictable: number;
            pgpgin: number;
            total_unevictable: number;
            pgmajfault: number;
            total_rss: number;
            total_rss_huge: number;
            total_writeback: number;
            total_inactive_anon: number;
            rss_huge: number;
            hierarchical_memory_limit: number;
            total_pgfault: number;
            total_active_file: number;
            active_anon: number;
            total_active_anon: number;
            total_pgpgout: number;
            total_cache: number;
            inactive_anon: number;
            active_file: number;
            pgfault: number;
            inactive_file: number;
            total_pgpgin: number;
        };
        max_usage: number;
        usage: number;
        failcnt: number;
        limit: number;
    }

    export interface CpuStatistics {
        cpu_usage: {
            percpu_usage: number[];
            usage_in_usermode: number;
            total_usage: number;
            usage_in_kernelmode: number;
        };
        system_cpu_usage: number;
        throttling_data: {
            periods: number;
            throttled_periods: number;
            throttled_time: number;
        };
    }

    export interface RestartPolicy {
        Name?: string;
        MaximumRetryCount?: number;
    }

}

export = Container;