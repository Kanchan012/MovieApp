import React, { type ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
    image: string;
    imageAlt: string;
    containerClassName: string;
    formSectionClassName: string;
    imageSectionClassName: string;
    imageClassName: string;
    title: ReactNode;
    titleClassName: string;
    formClassName: string;
    reverse?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    image,
    imageAlt,
    containerClassName,
    formSectionClassName,
    imageSectionClassName,
    imageClassName,
    title,
    titleClassName,
    formClassName,
    reverse = false
}) => {
    const FormSection = (
        <div className={formSectionClassName}>
            <h2 className={titleClassName}>{title}</h2>
            <div className={formClassName}>
                {children}
            </div>
        </div>
    );

    const ImageSection = (
        <div className={imageSectionClassName}>
            <img src={image} alt={imageAlt} className={imageClassName} />
        </div>
    );

    return (
        <div className={containerClassName}>
            {reverse ? (
                <>
                    {FormSection}
                    {ImageSection}
                </>
            ) : (
                <>
                    {ImageSection}
                    {FormSection}
                </>
            )}
        </div>
    );
};

export default AuthLayout;
