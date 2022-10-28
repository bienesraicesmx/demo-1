import { env } from '$env/dynamic/public'

$: console.log(env);
const cloud_name = env.PUBLIC_CLOUD_NAME;
const preset = env.PUBLIC_PRESET;

export const fileUpload = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    const formData = new FormData();
    formData.append('upload_preset', `${preset}`)
    formData.append('file', file);
    try {
        const res = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        return data.secure_url;
    } catch (error) {
        throw error;
    }
};