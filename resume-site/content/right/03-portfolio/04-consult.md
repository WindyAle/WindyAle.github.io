---
order: 1
title: "CALL:ACT"
period: "2025.12.18 ~ 2026.02.11 (약 8주)"
description: "카드사 콜센터 상담원 업무 지원 서비스"
content_type: "portfolio"
public: true
badges: ["sLLM Fine-tuning", "RAG", "STT/TTS", "Kanana", "React"]
award: "SK Networks Family AI Camp 우수상"
github: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-FINAL-1Team"
youtube: "https://www.youtube.com/watch?v=V53akHQd8jU"
image: "/images/projects/consult/main.png"
thumbnail: "/images/projects/consult/thumbnail.png"
gallery:
  - "/images/projects/consult/1.png"
  - "/images/projects/consult/2.png"
  - "/images/projects/consult/3.png"
  - "/images/projects/consult/4.png"
  - "/images/projects/consult/5.png"
  - "/images/projects/consult/6.png"
---

# CALL:ACT - 카드사 콜센터 상담원을 위한 AI 상담 업무 지원 서비스

**인력 대체가 아닌, AI와 인간의 협업**
> 상담 전/중/후 일련의 과정을 AI가 지원하여 상담사의 업무 효율을 극대화합니다.

## 프로젝트 차별점

기존 AICC(AI Contact Center)는 고객 만족도 하락과 상담원 이탈을 야기했습니다. CALL:ACT는 **AI가 상담원을 대체하는 것이 아니라, 상담원의 업무를 실시간으로 보조**하는 새로운 접근 방식을 제시합니다.

## 주요 기능

| 단계 | 기능 | 설명 |
|------|------|------|
| **상담 중** | 실시간 문서 검색 | VAD → STT → 키워드 추출 → RAG 검색 → 답변 가이드 제안 |
| **상담 후** | 후처리 자동화 | 상담 내용 요약, 후처리 문서 생성, AI 기반 피드백 |
| **교육** | 시뮬레이션 | 실제 상담 데이터 기반 AI 가상 고객과 훈련 |

## 담당 역할

### 1. 핵심 키워드 추출 시스템

실시간 상담 중 RAG 문서 검색의 정확도를 높이기 위한 키워드 추출 파이프라인 개발

- **한국어 형태소 분석기 Kiwi**를 활용하여 STT 결과에서 명사 추출
- 금융 도메인 **유의어 사전**을 구축하여 추출된 단어를 정확한 용어로 보정
- 보정된 키워드로 벡터 DB 검색 → 검색 정확도 향상

### 2. AI 가상 고객 시뮬레이션 시스템

신입 상담원이 **실전과 동일한 환경**에서 훈련할 수 있는 교육 시스템 전담 개발

- **sLLM Fine-tuning**: Kanana-nano-2.1b-instruct 모델을 6,533건의 실제 상담 데이터로 학습
  - 무미건조한 문장에 감정(친절/불만/성급)을 라벨링 후 해당 감정에 맞게 말투가 부여된 문장으로 각색하여 파인튜닝 학습 데이터로 사용
- 나이대, 성향, 문의 유형, 말투를 조합한 다양한 **고객 페르소나** 생성
- **TTS 음성 재생**: 가상 고객의 응답을 실제 음성으로 출력

### 3. 고객 성향 분석 모델 Fine-tuning

- **베이스 모델**: Kanana-1.5-8b-instruct
- 클래스 재구성(6→5)과 데이터 증강으로 **정확도 37.1% → 83.4% (+47.4%)** 달성

## 기술 스택

| 분류 | 기술 |
|------|------|
| AI/ML | Kanana (sLLM Fine-tuning), GPT-4o, RAG |
| NLP | Kiwi (형태소 분석), 금융 도메인 유의어 사전 |
| Speech | Whisper (STT), Qwen3-TTS |
| Backend | FastAPI, PostgreSQL + pgvector, Redis |
| Frontend | React, Tailwind |
| Infra | AWS EC2, Docker, Vercel |

## 팀 구성

4인 팀 (RAG 문서 검색 / **키워드 추출·교육 시뮬레이션** / STT·후처리 / DB·프론트엔드)

## Demo 영상

- [시스템 데모 영상 1](https://www.youtube.com/watch?v=V53akHQd8jU)
- [시스템 데모 영상 2](https://www.youtube.com/watch?v=pjBJqcaVj2Y)
