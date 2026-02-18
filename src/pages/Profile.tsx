import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { FaCamera, FaEdit, FaSave, FaTimes} from 'react-icons/fa';
import { useAppSelector } from '../redux/hooks';
import './Profile.css';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const watchlist = useAppSelector((state) => state.watchlist.items);
    const storedUser = localStorage.getItem('userData');
    const initialUser = storedUser ? JSON.parse(storedUser) : {
        name: "Guest",
        email: "guest@example.com",
        bio: "Movie enthusiast and critic.",
        moviesWatched: 0,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest"
    };

    const [user, setUser] = useState(initialUser);
    const [isEditing, setIsEditing] = useState(false);
    const [tempBio, setTempBio] = useState(user.bio || "");
    const [tempName, setTempName] = useState(user.name);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.dispatchEvent(new Event('authChange'));
        navigate('/login');
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedUser = { ...user, avatar: reader.result as string };
                setUser(updatedUser);
                localStorage.setItem('userData', JSON.stringify(updatedUser));
                window.dispatchEvent(new Event('authChange'));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        const updatedUser = { ...user, name: tempName, bio: tempBio };
        setUser(updatedUser);
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-layout">
                <aside className="profile-sidebar">
                    <div className="profile-card">
                        <div className="profile-avatar-wrapper">
                            <img src={user.avatar} alt="Profile Avatar" className="profile-avatar" />
                            <label htmlFor="photo-upload" className="photo-edit-overlay">
                                <FaCamera />
                            </label>
                            <input
                                type="file"
                                id="photo-upload"
                                hidden
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                        </div>

                        <div className="profile-info">
                            {isEditing ? (
                                <div className="edit-fields">
                                    <input
                                        type="text"
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        className="edit-name-input"
                                    />
                                    <textarea
                                        value={tempBio}
                                        onChange={(e) => setTempBio(e.target.value)}
                                        className="edit-bio-input"
                                        placeholder="Tell us about yourself..."
                                    />
                                    <div className="edit-btn-group">
                                        <button onClick={handleSaveProfile} className="save-btn"><FaSave /> Save</button>
                                        <button onClick={() => setIsEditing(false)} className="cancel-btn"><FaTimes /> Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h1>{user.name}</h1>
                                    <span className="profile-email">{user.email}</span>
                                    <p className="profile-bio">{user.bio || "No bio yet."}</p>
                                    <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                                        <FaEdit /> Edit Profile
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="profile-stats">
                            <div className="stat-item">
                                <span>{user.moviesWatched || 0}</span>
                                <label>Watched</label>
                            </div>
                            <div className="stat-item">
                                <span>{watchlist.length}</span>
                                <label>Watchlist</label>
                            </div>
                        </div>

                        <div className="profile-actions">
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default Profile;
