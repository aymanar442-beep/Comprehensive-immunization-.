export type AppRoom = 
  | 'castle_gate'       // Sovereign Castle Gate Entrance
  | 'cinema_tube'       // Shaheen CinemaTube Open Video Stage
  | 'short_reels'       // TikTok-Style Short Reels Video Feed (Max 2 Minutes)
  | 'talent_bounty'     // Talent Bounty Marketplace & Fast Micro-Jobs
  | 'godfather_sanctum' // The Godfather's Sanctum & Council of Titans
  | 'cinematic_previz'  // Cinematic Pre-Viz 3-Cut Simulator & Dispute Resolution
  | 'virtual_production'// Virtual Production Operations Room (3-in-1)
  | 'box_office_prophet'// Box Office Prophet Radar & Dramatic Pre-Shielding
  | 'autonomous_director' // Autonomous Director Suite & Negotiation Swarm
  | 'forensic_editor'   // Forensic Screenplay Editor & Plagiarism Engine
  | 'writers_lobby'     // Writers Lobby with Tiered Corridors
  | 'crisis_recovery'   // Crisis Plot Salvage & AI Reconstructor
  | 'semantic_breakdown'// Semantic Script Breakdown & Real-Time Production Costing
  | 'cineguard_audit'   // CineGuard Security & Script Audit
  | 'steganography_pro' // S-WCM Zero-Width Cryptographic Matrix
  | 'pitch_deck'        // Global Hollywood & XPRIZE Pitch Deck
  | 'elite_arsenal'     // Elite Arsenal Store
  | 'crypto_arbitrage'  // Backwards compatibility alias
  | 'sap_protocol' | 'shaheen_a1';     // S.A.P Protocol & Shaheen A1 Hardware

export type AppLanguage = 'ar' | 'en' | 'fr';

export type ClearanceLevel = 'Top Secret (Cast Lead)' | 'Confidential (Crew)' | 'Restricted (Production)' | 'Director Cut (Executive)';

export interface WatermarkPayload {
  recipientName: string;
  recipientRole: string;
  studioName: string;
  scriptTitle: string;
  clearanceLevel: ClearanceLevel;
  timestamp: string;
  cipherSignature: string;
  fingerprintHash: string;
}

export interface ForensicExtractionResult {
  detected: boolean;
  extractionLatencyMs: number;
  payload: WatermarkPayload | null;
  rawBinaryLength: number;
  tamperIntegrity: '100% Authentic (Court-Admissible)' | 'Altered/Fragmented' | 'No Watermark Found';
  characterCount: number;
  hiddenZeroWidthCount: number;
}

export interface ScriptAnalysisResult {
  totalEstimate: number;
  currency: string;
  detectedElements: {
    nameAr: string;
    nameEn: string;
    cost: number;
    category: 'stunt' | 'lighting' | 'location' | 'cast' | 'vfx' | 'permits';
  }[];
  shootingScheduleDays: number;
  crewRecommendation: string;
  riskFactor: 'Low' | 'Medium' | 'High' | 'Extreme';
}

export interface PlagiarismResult {
  matchPercentage: number;
  isPlagiarized: boolean;
  tamperIntegrity: string;
  hiddenWatermarkFound: boolean;
  watermarkOwner?: string;
  clicheLines: { line: number; text: string; suggestion: string; locked: boolean }[];
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: Array<{ providerId: string; email?: string | null }>;
  };
}
