import * as React from "react";
import { BadgeCheck } from "lucide-react";
import "./SocialPost.css";

interface SocialPostProps {
    avatar: string;
    handle: string;
    isVerified?: boolean;
    socialIcon: React.ReactNode;
    caption: string;
    image: string;
    metadata: string;
    className?: string;
}

export function SocialPost({
    avatar,
    handle,
    isVerified,
    socialIcon,
    caption,
    image,
    metadata,
    className,
}: SocialPostProps) {
    // Split metadata by separator to add custom spacing
    const metadataParts = metadata.split(" • ");

    // Functional rendering for caption to highlight hashtags
    const renderCaption = (text: string) => {
        return text.split(/\s+/).map((word, i) => {
            if (word.startsWith("#")) {
                return (
                    <span key={i} className="social-post-hashtag">
                        {word}{" "}
                    </span>
                );
            }
            return word + " ";
        });
    };

    return (
        <div className={`social-post-card ${className || ""}`}>
            <div className="social-post-header">
                <div className="social-post-user">
                    <img src={avatar} alt={handle} className="social-post-avatar" />
                    <div className="social-post-handle-container">
                        <span className="social-post-handle">{handle}</span>
                        {isVerified && (
                            <BadgeCheck
                                size={15}
                                className="social-post-verified-badge"
                                strokeWidth={2.5}
                            />
                        )}
                    </div>
                </div>
                <div className="social-post-icon">{socialIcon}</div>
            </div>
            <p className="social-post-caption">{renderCaption(caption)}</p>
            <div className="social-post-image-container">
                <img src={image} alt="Post content" className="social-post-image" />
            </div>
            <div className="social-post-footer">
                <div className="social-post-metadata">
                    {metadataParts.map((part, i) => (
                        <React.Fragment key={i}>
                            <span className="metadata-item">{part}</span>
                            {i < metadataParts.length - 1 && <span className="metadata-bullet">•</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
