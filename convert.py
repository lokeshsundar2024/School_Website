import os
from PIL import Image

def convert_in_place(folder_path, quality=80):
    # Loop through all files in the directory
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".jpg"):
            try:
                # Full path for the source file
                img_path = os.path.join(folder_path, filename)
                
                with Image.open(img_path) as img:
                    # Create the new filename in the same folder
                    base_name = os.path.splitext(filename)[0]
                    output_path = os.path.join(folder_path, f"{base_name}.webp")
                    
                    # Save as WebP
                    img.save(output_path, "WEBP", quality=quality)
                    
                print(f"Created: {base_name}.webp")
            
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    print("\nDone! Check your folder for the new .webp files.")

# Usage: Use 'r' before the string to handle Windows backslashes
path = r"E:\SchoolWebsite\public\AING" 
convert_in_place(path)