module.exports = {
    objects: {
        PhoneGap: {
            path: 'phonegap',
            children: {
                exec: {
                    path: 'phonegap/exec'
                }
            }
        },
        navigator: {
            children: {
                notification: {
                    path: 'phonegap/plugin/notification'
                },
                accelerometer: {
                    path: 'phonegap/plugin/accelerometer'
                },
                battery: {
                    path: 'phonegap/plugin/battery'
                },
                camera:{
                    path: 'phonegap/plugin/Camera'
                },
                compass:{
                    path: 'phonegap/plugin/compass'
                },
                contacts: {
                    path: 'phonegap/plugin/contacts'
                },
                device:{
                    children:{
                        capture: {
                            path: 'phonegap/plugin/capture'
                        }
                    }
                },
                geolocation: {
                    path: 'phonegap/plugin/geolocation'
                },
                network: {
                    children: {
                        connection: {
                            path: 'phonegap/plugin/network'
                        }
                    }
                }
            }
        },
        Acceleration: {
            path: 'phonegap/plugin/Acceleration'
        },
        Camera:{
            path: 'phonegap/plugin/CameraConstants'
        },
        CaptureError: {
            path: 'phonegap/plugin/CaptureError'
        },
        CaptureAudioOptions:{
            path: 'phonegap/plugin/CaptureAudioOptions'
        },
        CaptureImageOptions: {
            path: 'phonegap/plugin/CaptureImageOptions'
        },
        CaptureVideoOptions: {
            path: 'phonegap/plugin/CaptureVideoOptions'
        },
        CompassHeading:{
            path: 'phonegap/plugin/CompassHeading'
        },
        CompassError:{
            path: 'phonegap/plugin/CompassConstants'
        },
        ConfigurationData: {
            path: 'phonegap/plugin/ConfigurationData'
        },
        Connection: {
            path: 'phonegap/plugin/Connection'
        },
        Contact: {
            path: 'phonegap/plugin/Contact'
        },
        ContactAddress: {
            path: 'phonegap/plugin/ContactAddress'
        },
        ContactError: {
            path: 'phonegap/plugin/ContactError'
        },
        ContactField: {
            path: 'phonegap/plugin/ContactField'
        },
        ContactFindOptions: {
            path: 'phonegap/plugin/ContactFindOptions'
        },
        ContactName: {
            path: 'phonegap/plugin/ContactName'
        },
        ContactOrganization: {
            path: 'phonegap/plugin/ContactOrganization'
        },
        Coordinates: {
            path: 'phonegap/plugin/Coordinates'
        },
        DirectoryEntry: {
            path: 'phonegap/plugin/DirectoryEntry'
        },
        DirectoryReader: {
            path: 'phonegap/plugin/DirectoryReader'
        },
        Entry: {
            path: 'phonegap/plugin/Entry'
        },
        File: {
            path: 'phonegap/plugin/File'
        },
        FileEntry: {
            path: 'phonegap/plugin/FileEntry'
        },
        FileError: {
            path: 'phonegap/plugin/FileError'
        },
        FileReader: {
            path: 'phonegap/plugin/FileReader'
        },
        FileSystem: {
            path: 'phonegap/plugin/FileSystem'
        },
        FileTransfer: {
            path: 'phonegap/plugin/FileTransfer'
        },
        FileTransferError: {
            path: 'phonegap/plugin/FileTransferError'
        },
        FileUploadOptions: {
            path: 'phonegap/plugin/FileUploadOptions'
        },
        FileUploadResult: {
            path: 'phonegap/plugin/FileUploadResult'
        },
        FileWriter: {
            path: 'phonegap/plugin/FileWriter'
        },
        Flags: {
            path: 'phonegap/plugin/Flags'
        },
        LocalFileSystem: {
            path: 'phonegap/plugin/LocalFileSystem'
        },
        Media: {
            path: 'phonegap/plugin/Media'
        },
        MediaError: {
            path: 'phonegap/plugin/MediaError'
        },
        MediaFile: {
            path: 'phonegap/plugin/MediaFile'
        },
        MediaFileData:{
            path: 'phonegap/plugin/MediaFileData'
        },
        Metadata:{
            path: 'phonegap/plugin/Metadata'
        },
        Position: {
            path: 'phonegap/plugin/Position'
        },
        PositionError: {
            path: 'phonegap/plugin/PositionError'
        },
        ProgressEvent: {
            path: 'phonegap/plugin/ProgressEvent'
        },
        requestFileSystem:{
            path: 'phonegap/plugin/requestFileSystem'
        },
        resolveLocalFileSystemURI:{
            path: 'phonegap/plugin/resolveLocalFileSystemURI'
        }
    }
};