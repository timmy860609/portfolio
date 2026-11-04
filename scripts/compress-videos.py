"""Create browser-friendly delivery copies; keep original recordings unchanged.
Run with FFMPEG=/path/to/ffmpeg python3 scripts/compress-videos.py.
"""
import os
import subprocess
from pathlib import Path

ffmpeg = os.environ.get('FFMPEG', 'ffmpeg')
sources = sorted(Path('source-media/project-videos').rglob('*.mov'))
for source in sources:
    output = Path('public/Video') / source.parent.name
    output.mkdir(parents=True, exist_ok=True)
    for width, rate in [(768, '900k'), (1280, '1800k')]:
        target = output / f'{source.stem}-{width}.mp4'
        if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
            continue
        subprocess.run([
            ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', str(source),
            '-map', '0:v:0', '-an', '-map_metadata', '-1',
            '-vf', f'scale=min({width}\\,iw):-2:flags=lanczos,fps=30',
            '-c:v', 'libx264', '-preset', 'slow', '-crf', '23',
            '-maxrate', rate, '-bufsize', '3600k' if width == 1280 else '1800k',
            '-pix_fmt', 'yuv420p', '-g', '60', '-movflags', '+faststart', str(target),
        ], check=True)
        print(f'{source.name}: {source.stat().st_size} -> {target.name}: {target.stat().st_size}', flush=True)
    poster = output / f'{source.stem}-poster.webp'
    subprocess.run([
        ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', str(source),
        '-frames:v', '1', '-vf', 'scale=768:-2', '-c:v', 'libwebp', '-quality', '75', str(poster),
    ], check=True)
