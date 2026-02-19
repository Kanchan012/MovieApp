import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { logout, updateUser } from '../redux/slices/authSlice';
import './Profile.css';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector((state) => state.watchlist.items);
    const user = useAppSelector((state) => state.auth.user);
    const initialUser = user || {
        name: "Guest",
        email: "guest@example.com",
        bio: "Movie enthusiast and critic.",
        moviesWatched: 0,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest"
    };

    const [localUser, setLocalUser] = useState(initialUser);
    const [isEditing, setIsEditing] = useState(false);
    const [tempBio, setTempBio] = useState(localUser.bio || "");
    const [tempName, setTempName] = useState(localUser.name);


    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('isLoggedIn');
        window.dispatchEvent(new Event('authChange'));
        navigate('/login');
    };


    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const avatar = reader.result as string;
                dispatch(updateUser({ avatar }));
                setLocalUser(prev => ({ ...prev, avatar }));

                const stored = localStorage.getItem('userData');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    localStorage.setItem('userData', JSON.stringify({ ...parsed, avatar }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        dispatch(updateUser({ name: tempName, bio: tempBio }));
        setLocalUser(prev => ({ ...prev, name: tempName, bio: tempBio }));

        const stored = localStorage.getItem('userData');
        if (stored) {
            const parsed = JSON.parse(stored);
            localStorage.setItem('userData', JSON.stringify({ ...parsed, name: tempName, bio: tempBio }));
        }
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-layout">
                <aside className="profile-sidebar">
                    <div className="profile-card">
                        <div className="profile-avatar-wrapper">
                            <img src={localUser.avatar} alt="Profile Avatar" className="profile-avatar" />
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
                                    <h1>{localUser.name}</h1>
                                    <span className="profile-email">{localUser.email}</span>
                                    <p className="profile-bio">{localUser.bio || "No bio yet."}</p>
                                    <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                                        <FaEdit /> Edit Profile
                                    </button>
                                </>

                            )}
                        </div>

                        <div className="profile-stats">
                            <div className="stat-item">
                                <span>{localUser.moviesWatched || 0}</span>
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
