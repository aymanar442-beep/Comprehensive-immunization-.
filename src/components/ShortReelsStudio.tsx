import React, { useState, useRef, useEffect } from 'react';
import { AppLanguage } from '../types';
import { 
  Play, Pause, UploadCloud, Film, Video, Heart, MessageSquare, 
  Share2, ShieldCheck, CheckCircle2, Award, Sparkles, Plus, 
  Volume2, VolumeX, Eye, Flame, Clock, Music, UserCheck, 
  Send, AlertCircle, Bookmark, Check, Camera, Compass
} from 'lucide-react';

// Pre-existing high quality assets for reels
import talentCastingImg from '../assets/images/previz_talent_casting_1788142683518.jpg';
import directorShot1 from '../assets/images/previz_director_shot1_1788140643387.jpg';
import directorShot2 from '../assets/images/previz_director_shot2_1788140656689.jpg';
import writerShot1 from '../assets/images/previz_writer_shot1_1788140683719.jpg';
import tunnelChaseImg from '../assets/images/previz_tunnel_chase_1788140740139.jpg';

interface ShortReelsStudioProps {
  lang: AppLanguage;
}

export interface ReelVideo {
  id: string;
  creatorName: string;
  creatorHandle: string;
  creatorAvatar?: string;
  title: string;
  description: string;
  durationSeconds: number; // Max 120s (2 minutes)
  formattedDuration: string;
  category: 'Acting Audition' | 'Screenplay Pitch' | 'Director Vision' | 'VFX & Stunt' | 'Voice Reel';
  thumbnailUrl: string;
  videoUrl?: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  viewsCount: number;
  uploadedTimeAgo: string;
  soundTrackName: string;
  hasSovereignProtection: boolean;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export const ShortReelsStudio: React.FC<ShortReelsStudioProps> = ({ lang }) => {
  // Feed of short reels (all capped to <= 120 seconds)
  const [reels, setReels] = useState<ReelVideo[]>([
    {
      id: 'reel-1',
      creatorName: 'Sarah Al-Zahrani',
      creatorHandle: '@sarah_writer',
      title: '60-Second Feature Script Pitch: "The Shadow Architect"',
      description: 'Logline: When a blind restoration architect uncovers classified government blueprints in Old Cairo, she becomes the prime target of a sovereign syndicate. Looking for indie producers & co-writers!',
      durationSeconds: 58,
      formattedDuration: '00:58',
      category: 'Screenplay Pitch',
      thumbnailUrl: writerShot1,
      likesCount: 14820,
      commentsCount: 842,
      sharesCount: 310,
      viewsCount: 65400,
      uploadedTimeAgo: '3 hours ago',
      soundTrackName: 'Shaheen Cinema Beats • Original Audio',
      hasSovereignProtection: true,
    },
    {
      id: 'reel-2',
      creatorName: 'Fahad Al-Mansoor',
      creatorHandle: '@fahad_actor',
      title: 'Dramatic Monologue Audition (90s) • Lead Detective Confrontation',
      description: 'Scene: Interrogating the serial blackmailer who kidnapped his brother. Practiced with method acting techniques. Ready for casting calls in Dubai, Riyadh & Hollywood.',
      durationSeconds: 92,
      formattedDuration: '01:32',
      category: 'Acting Audition',
      thumbnailUrl: talentCastingImg,
      likesCount: 29400,
      commentsCount: 1950,
      sharesCount: 880,
      viewsCount: 112000,
      uploadedTimeAgo: '6 hours ago',
      soundTrackName: 'Cinematic Thriller Strings • Fahad Sound Studio',
      hasSovereignProtection: true,
    },
    {
      id: 'reel-3',
      creatorName: 'Tariq Al-Dossary',
      creatorHandle: '@tariq_director',
      title: 'Tunnel Chase Sequence • Indie Action Director Showreel',
      description: 'Filmed on location with anamorphic lenses and dynamic gimbal tracking. Proving high-octane Hollywood chase aesthetics can be achieved on an indie budget ($5,000)!',
      durationSeconds: 114,
      formattedDuration: '01:54',
      category: 'Director Vision',
      thumbnailUrl: tunnelChaseImg,
      likesCount: 42100,
      commentsCount: 3120,
      sharesCount: 1450,
      viewsCount: 189000,
      uploadedTimeAgo: '1 day ago',
      soundTrackName: 'Midnight Adrenaline Drive • Hans Zimmer Tribute',
      hasSovereignProtection: true,
    },
    {
      id: 'reel-4',
      creatorName: 'Layla Kanaan',
      creatorHandle: '@layla_voice',
      title: 'Multilingual Voice Acting Reel: Sci-Fi AI & Villainess',
      description: 'Showcasing 4 distinct vocal textures in 75 seconds: British AI Butler, Cyberpunk Cyborg, Emotional Anti-Hero, and Epic Narration.',
      durationSeconds: 75,
      formattedDuration: '01:15',
      category: 'Voice Reel',
      thumbnailUrl: directorShot2,
      likesCount: 18200,
      commentsCount: 920,
      sharesCount: 440,
      viewsCount: 78000,
      uploadedTimeAgo: '2 days ago',
      soundTrackName: 'Cyber Ambient Synthwave • Layla VO Studio',
      hasSovereignProtection: true,
    },
  ]);

  const [activeReelIndex, setActiveReelIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  
  // Quick comment box state
  const [activeCommentsReelId, setActiveCommentsReelId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [commentsList, setCommentsList] = useState<{ [reelId: string]: Array<{ id: string; author: string; handle: string; text: string; timeAgo: string }> }>({
    'reel-1': [
      { id: 'c1', author: 'Mark Sterling (Executive Producer)', handle: '@sterling_films', text: 'Brilliant hook in the first 15 seconds! Sent you a private contract inquiry on Shaheen.', timeAgo: '2h ago' },
      { id: 'c2', author: 'Maya Lin', handle: '@maya_screen', text: 'The 3-act structure is razor sharp. Love the pacing.', timeAgo: '1h ago' }
    ],
    'reel-2': [
      { id: 'c3', author: 'Universal Casting Scout', handle: '@scout_universal', text: 'Powerful eye contact and controlled emotional transition at 0:45. Please check DM!', timeAgo: '3h ago' }
    ]
  });

  // Upload New Reel Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadCategory, setUploadCategory] = useState<ReelVideo['category']>('Acting Audition');
  const [uploadDurationSecs, setUploadDurationSecs] = useState<number>(60);
  const [uploadCreatorName, setUploadCreatorName] = useState('');
  const [uploadCreatorHandle, setUploadCreatorHandle] = useState('');
  const [uploadSoundtrack, setUploadSoundtrack] = useState('');
  const [uploadFileSelected, setUploadFileSelected] = useState<boolean>(false);
  const [uploadFileName, setUploadFileName] = useState<string>('');
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  const activeReel = reels[activeReelIndex] || reels[0];

  const handleLike = (id: string) => {
    setReels(prev => prev.map(r => {
      if (r.id === id) {
        const isLiked = !r.isLiked;
        return {
          ...r,
          isLiked,
          likesCount: isLiked ? r.likesCount + 1 : r.likesCount - 1
        };
      }
      return r;
    }));
  };

  const handleBookmark = (id: string) => {
    setReels(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, isBookmarked: !r.isBookmarked };
      }
      return r;
    }));
  };

  const handleAddComment = (reelId: string) => {
    if (!newCommentText.trim()) return;
    const newComment = {
      id: `c-${Date.now()}`,
      author: 'Studio Talent Scout',
      handle: '@talent_pro',
      text: newCommentText.trim(),
      timeAgo: 'Just now'
    };

    setCommentsList(prev => ({
      ...prev,
      [reelId]: [newComment, ...(prev[reelId] || [])]
    }));

    setReels(prev => prev.map(r => r.id === reelId ? { ...r, commentsCount: r.commentsCount + 1 } : r));
    setNewCommentText('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadFileName(file.name);
      setUploadFileSelected(true);
      if (!uploadTitle) {
        setUploadTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handlePublishReel = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadDurationSecs > 120) {
      alert("Reels must be under 2 minutes (120 seconds) in length.");
      return;
    }

    const minutes = Math.floor(uploadDurationSecs / 60);
    const seconds = uploadDurationSecs % 60;
    const formatted = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const newReel: ReelVideo = {
      id: `reel-${Date.now()}`,
      creatorName: uploadCreatorName || 'Indie Visionary',
      creatorHandle: uploadCreatorHandle.startsWith('@') ? uploadCreatorHandle : `@${uploadCreatorHandle || 'creator'}`,
      title: uploadTitle || 'Untitled Showcase Reel',
      description: uploadDescription || 'Uploaded via Shaheen Reels Studio for instant discovery.',
      durationSeconds: uploadDurationSecs,
      formattedDuration: formatted,
      category: uploadCategory,
      thumbnailUrl: directorShot1,
      likesCount: 1,
      commentsCount: 0,
      sharesCount: 0,
      viewsCount: 1,
      uploadedTimeAgo: 'Just now',
      soundTrackName: uploadSoundtrack || 'Shaheen Original Sound Studio',
      hasSovereignProtection: true,
      isLiked: true
    };

    setReels([newReel, ...reels]);
    setActiveReelIndex(0);
    setUploadSuccessMessage('Reel successfully published with S-WCM Sovereign Protection watermark!');
    setTimeout(() => {
      setUploadSuccessMessage(null);
      setIsUploadModalOpen(false);
      // Reset form
      setUploadTitle('');
      setUploadDescription('');
      setUploadCreatorName('');
      setUploadCreatorHandle('');
      setUploadFileSelected(false);
      setUploadFileName('');
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Top Studio Header & Fast Action Bar */}
      <div className="bg-[#0b1120] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-[#00d2ff] border border-cyan-500/40 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              SHORT-FORM CINEMA FEED • MAX 2 MINUTES
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              S-WCM WATERMARKED
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide font-mono">
            Shaheen Reels <span className="text-[#00d2ff]">TikTok & Shorts Studio</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Fast-discovery short video reels (up to 120 seconds). Writers pitch scripts, actors audition with monologues, and directors showcase micro-budget sequences directly to global producers.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center gap-2 transition-all cursor-pointer hover:scale-105"
          >
            <Plus className="w-4 h-4 text-slate-950 stroke-[3]" />
            <span>Upload Short Reel (Max 2 Min)</span>
          </button>
        </div>
      </div>

      {/* Main Reels Container (TikTok / Reels Style Vertical Player + Sidebar Directory) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left / Center: Interactive 9:16 Vertical Reel Player */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="w-full max-w-[420px] bg-slate-950 rounded-3xl border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(0,210,255,0.2)] overflow-hidden relative aspect-[9/16] flex flex-col justify-between group">
            
            {/* Background Simulated Video Player / Backdrop Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={activeReel.thumbnailUrl} 
                alt={activeReel.title}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60" />
            </div>

            {/* Top Reel Overlay Bar */}
            <div className="relative z-10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[#00d2ff] border border-cyan-500/30 text-[11px] font-mono font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activeReel.formattedDuration} / 02:00
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-mono font-semibold">
                  {activeReel.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 transition-all cursor-pointer"
                  title={isPlaying ? "Pause Reel" : "Play Reel"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-amber-400 fill-current" />}
                </button>
              </div>
            </div>

            {/* Middle Play / Pause Center Pulse Feedback */}
            {!isPlaying && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur-[2px]"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_30px_#00d2ff] transition-transform hover:scale-110">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Right Side Social Interaction Column (Like, Comment, Share, Bookmark) */}
            <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4">
              
              {/* Creator Profile Avatar */}
              <div className="relative mb-2">
                <div className="w-11 h-11 rounded-full border-2 border-cyan-400 p-0.5 bg-slate-900 overflow-hidden shadow-lg">
                  <img src={activeReel.thumbnailUrl} alt={activeReel.creatorName} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[10px] font-black shadow">
                  +
                </div>
              </div>

              {/* Like Button */}
              <button 
                onClick={() => handleLike(activeReel.id)}
                className="flex flex-col items-center gap-1 group/btn cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${activeReel.isLiked ? 'bg-rose-500/80 text-white shadow-[0_0_15px_#f43f5e]' : 'bg-black/60 text-white hover:bg-black/80'}`}>
                  <Heart className={`w-5 h-5 ${activeReel.isLiked ? 'fill-current text-white' : 'text-white'}`} />
                </div>
                <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                  {activeReel.likesCount.toLocaleString()}
                </span>
              </button>

              {/* Comment Button */}
              <button 
                onClick={() => setActiveCommentsReelId(activeCommentsReelId === activeReel.id ? null : activeReel.id)}
                className="flex flex-col items-center gap-1 group/btn cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                  {activeReel.commentsCount.toLocaleString()}
                </span>
              </button>

              {/* Bookmark / Deal Inquire */}
              <button 
                onClick={() => handleBookmark(activeReel.id)}
                className="flex flex-col items-center gap-1 group/btn cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${activeReel.isBookmarked ? 'bg-amber-500/80 text-slate-950 shadow-[0_0_15px_#f59e0b]' : 'bg-black/60 text-white hover:bg-black/80'}`}>
                  <Bookmark className={`w-5 h-5 ${activeReel.isBookmarked ? 'fill-current' : ''}`} />
                </div>
                <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                  Save
                </span>
              </button>

              {/* Share */}
              <button 
                onClick={() => alert("Reel link & Sovereign S-WCM verification code copied to clipboard!")}
                className="flex flex-col items-center gap-1 group/btn cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all">
                  <Share2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-bold text-white drop-shadow">
                  {activeReel.sharesCount}
                </span>
              </button>
            </div>

            {/* Bottom Reel Details Overlay */}
            <div className="relative z-10 p-5 space-y-2.5 max-w-[82%]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white font-mono">{activeReel.creatorHandle}</span>
                <span className="text-slate-400 text-xs font-mono">• {activeReel.uploadedTimeAgo}</span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                {activeReel.title}
              </h3>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {activeReel.description}
              </p>

              {/* Soundtrack Pill */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#00d2ff] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full w-fit">
                <Music className="w-3.5 h-3.5 animate-spin" />
                <span className="truncate max-w-[180px]">{activeReel.soundTrackName}</span>
              </div>
            </div>

            {/* Video Timeline Progress Bar */}
            <div className="w-full bg-slate-800/80 h-1.5 relative z-20">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[65%] transition-all duration-300"
              />
            </div>

          </div>

          {/* Quick Reel Navigation Controls */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setActiveReelIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1))}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-bold transition-all cursor-pointer"
            >
              &uarr; Previous Reel
            </button>
            <span className="text-xs font-mono text-slate-400">
              {activeReelIndex + 1} of {reels.length}
            </span>
            <button
              onClick={() => setActiveReelIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-black shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all cursor-pointer"
            >
              &darr; Next Reel
            </button>
          </div>
        </div>

        {/* Right Side: Reel Playlist Feed & Interactive Fast Comments */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Feed List of Reels */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#00d2ff]" />
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  Explore Short Reels Feed
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-mono">{reels.length} Videos</span>
            </div>

            <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
              {reels.map((reel, idx) => (
                <div
                  key={reel.id}
                  onClick={() => {
                    setActiveReelIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    activeReelIndex === idx
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-950 shrink-0 relative">
                    <img src={reel.thumbnailUrl} alt={reel.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/80 text-cyan-300 px-1 rounded font-bold">
                      {reel.formattedDuration}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#00d2ff] font-bold">{reel.category}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{reel.uploadedTimeAgo}</span>
                    </div>
                    <h5 className="text-xs font-bold text-white truncate">{reel.title}</h5>
                    <p className="text-[11px] text-slate-400 truncate">{reel.creatorName} ({reel.creatorHandle})</p>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 pt-0.5">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-rose-400" /> {reel.likesCount}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-cyan-400" /> {reel.viewsCount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reel Real-Time Comments & Studio Inquiries */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  Producer Feedback & Talent Inquiries
                </h4>
              </div>
              <span className="text-xs text-emerald-400 font-mono font-bold">Verified Deals</span>
            </div>

            {/* Comments List for Active Reel */}
            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
              {(commentsList[activeReel.id] && commentsList[activeReel.id].length > 0) ? (
                commentsList[activeReel.id].map(comment => (
                  <div key={comment.id} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="font-bold text-cyan-300">{comment.author}</span>
                      <span className="text-slate-500">{comment.timeAgo}</span>
                    </div>
                    <p className="text-xs text-slate-200">{comment.text}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-xs text-slate-400 font-mono">
                  No producer inquiries yet. Be the first to contact this creator!
                </div>
              )}
            </div>

            {/* Fast Comment Input Form */}
            <div className="flex items-center gap-2 pt-2">
              <input 
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddComment(activeReel.id)}
                placeholder="Post feedback or producer contract inquiry..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={() => handleAddComment(activeReel.id)}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Upload Short Reel Modal (Max 2 Minutes) */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b1120] border-2 border-cyan-500/60 rounded-3xl max-w-xl w-full shadow-[0_0_50px_rgba(0,210,255,0.3)] overflow-hidden my-auto">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border-b border-cyan-500/40 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-[#00d2ff]" />
                <div>
                  <h3 className="text-base font-black text-white font-mono tracking-wide">
                    Upload Short Reel (Max 2 Minutes)
                  </h3>
                  <p className="text-[11px] text-cyan-300 font-mono">
                    Free Instant Discovery for Screenwriters, Actors & Directors
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-300 transition-colors cursor-pointer text-xs font-mono font-bold"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handlePublishReel} className="p-6 space-y-4 text-xs">
              
              {uploadSuccessMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-300 font-bold text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{uploadSuccessMessage}</span>
                </div>
              )}

              {/* Video File Drop / Select Area */}
              <div className="border-2 border-dashed border-cyan-500/50 hover:border-cyan-400 bg-slate-900/60 rounded-2xl p-5 text-center space-y-2 cursor-pointer transition-all">
                <input 
                  type="file" 
                  accept="video/mp4,video/quicktime,video/webm" 
                  onChange={handleFileChange}
                  className="hidden" 
                  id="reel-file-input"
                />
                <label htmlFor="reel-file-input" className="cursor-pointer block">
                  <UploadCloud className="w-8 h-8 text-cyan-400 mx-auto" />
                  <p className="font-bold text-white mt-2">
                    {uploadFileSelected ? `Selected: ${uploadFileName}` : 'Select or drag your 9:16 vertical video reel'}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">
                    MP4, MOV, WEBM • Maximum 120 seconds duration (2 Minutes)
                  </p>
                </label>
              </div>

              {/* Creator Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono font-bold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={uploadCreatorName}
                    onChange={(e) => setUploadCreatorName(e.target.value)}
                    placeholder="e.g. Sarah Al-Zahrani"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-mono font-bold mb-1">Creator Handle</label>
                  <input
                    type="text"
                    required
                    value={uploadCreatorHandle}
                    onChange={(e) => setUploadCreatorHandle(e.target.value)}
                    placeholder="@sarah_writer"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-mono font-bold mb-1">Reel Title</label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="Catchy pitch or audition title"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-mono font-bold mb-1">Reel Category</label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value as ReelVideo['category'])}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Screenplay Pitch">Screenplay Pitch (Script Idea)</option>
                    <option value="Acting Audition">Acting Audition (Monologue)</option>
                    <option value="Director Vision">Director Vision (Scene Showcase)</option>
                    <option value="VFX & Stunt">VFX & Stunt Coordinator</option>
                    <option value="Voice Reel">Voice Reel & Dubbing</option>
                  </select>
                </div>
              </div>

              {/* Duration Slider (Strictly capped at 120s) */}
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-300 font-bold">Duration (Max 120s / 2 Minutes):</span>
                  <span className="text-cyan-400 font-bold">{uploadDurationSecs} seconds ({Math.floor(uploadDurationSecs / 60)}m {uploadDurationSecs % 60}s)</span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={120} 
                  value={uploadDurationSecs}
                  onChange={(e) => setUploadDurationSecs(Number(e.target.value))}
                  className="w-full accent-[#00d2ff] cursor-pointer"
                />
              </div>

              {/* Description & Logline */}
              <div>
                <label className="block text-slate-300 font-mono font-bold mb-1">Description / Logline / Casting Pitch</label>
                <textarea
                  rows={2}
                  value={uploadDescription}
                  onChange={(e) => setUploadDescription(e.target.value)}
                  placeholder="Summarize your story hook, character background, or production needs..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black font-mono shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all cursor-pointer"
                >
                  Publish Reel with S-WCM Protection
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
