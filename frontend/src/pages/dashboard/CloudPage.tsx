import {
  DropboxIcon,
  GoogleDriveIcon,
  ICloudIcon,
  OneDriveIcon,
} from '../../components/icons/NavigationIcons'

export function CloudPage() {
  return (
    <div className="connect-grid">
      <button type="button" className="connect-card">
        <GoogleDriveIcon className="connect-icon" />
        <span className="connect-title">Connect with Google Drive</span>
      </button>

      <button type="button" className="connect-card">
        <DropboxIcon className="connect-icon" />
        <span className="connect-title">Connect with Dropbox</span>
      </button>

      <button type="button" className="connect-card">
        <OneDriveIcon className="connect-icon" />
        <span className="connect-title">Connect with Microsoft OneDrive</span>
      </button>

      <button type="button" className="connect-card">
        <ICloudIcon className="connect-icon" />
        <span className="connect-title">Connect with Apple iCloud</span>
      </button>
    </div>
  )
}
