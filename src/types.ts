export type AppRoom = 
  | 'castle_gate'       // الصفحة 1: بوابة الدخول والـ 3D Card وشريط الإعلانات المتوهج
  | 'forensic_editor'   // الصفحة 2: مساعد السيناريو، الفحص الجنائي، وكشف السرقات
  | 'writers_lobby'     // الصفحة 3: رواق غرف الكتاب (الهواة، المحترفين، والـ VIP) مع تنبيه الفيديو
  | 'crisis_recovery'   // الصفحة 4: بوابة إنقاذ السيناريوهات والـ AI Reconstructor وخدمة العراب
  | 'semantic_breakdown'// الصفحة 5: التفكيك الدلالي وحساب التكلفة الإنتاجية الفورية
  | 'cineguard_audit'   // الصفحة الخاصة بتدقيق السيناريو (CineGuard)
  | 'steganography_pro' // محرك البصمة الصفرية S-WCM واستخراج هوية المسرب الجنائي
  | 'pitch_deck'        // عرض المسابقة وهوليوود و Y Combinator
  | 'crypto_arbitrage'  // منظومة شاهين كريبتو الذكية
  | 'sap_protocol' | 'shaheen_a1';     // منظومة S.A.P لحماية الأفراد والأمن السيبراني للمستشعرات

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
