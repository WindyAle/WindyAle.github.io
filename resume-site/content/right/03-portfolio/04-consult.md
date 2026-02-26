---
order: 1
title: "카드사 상담사 AI 실시간 상담 지원 시스템"
period: "2025.12.18 ~ 2026.02.11 (약 8주)"
description: "STT, RAG, LLM을 활용한 실시간 상담 지원 및 신입 상담원 교육용 시뮬레이션 시스템"
content_type: "portfolio"
public: true
badges: ["STT", "TTS", "sLLM", "RAG", "LLM"]
award: "SK Networks Family AI Camp 우수상"
github: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-FINAL-1Team"
youtube: "https://www.youtube.com/watch?v=V53akHQd8jU"
image: "/images/projects/consult/main.png"
thumbnail: "/images/projects/consult/thumbnail.png"
---

# 카드사 상담사를 위한 AI 기반 실시간 상담 지원 시스템

> **AI가 함께하는 상담, 더 빠르고 정확하게**
> Speech-to-Text, RAG, LLM을 활용하여 상담사의 업무 효율을 극대화합니다.

## 프로젝트 배경

카드사 고객센터에서 상담사들이 정확하고 빠른 상담을 제공할 수 있도록 AI 기반 실시간 지원 시스템을 개발했습니다. 음성 인식을 통해 고객의 질문을 실시간으로 분석하고, RAG와 LLM을 활용하여 최적의 답변을 추천합니다.

## 주요 기능

- **실시간 음성 인식**: STT를 활용한 고객-상담사 대화 실시간 텍스트 변환
- **AI 답변 추천**: RAG와 LLM 기반 상황별 최적 답변 제안
- **상담 시뮬레이션**: 신입 상담원 교육을 위한 AI 가상 고객 시스템

## 담당 역할

신입 상담원 교육용 **상담 시뮬레이션 시스템** 전담 개발:

- **도메인 특화 텍스트 보정 로직 설계**: 카드사 용어(카드론, 리볼빙, 한도 등)와 상담 맥락을 반영한 STT 결과물 정제 파이프라인 구축. 이전 프로젝트에서 익힌 데이터 전처리 감각을 '가공되지 않은 불완전한 음성 데이터' 처리에 적용
- **sLLM 파인튜닝 및 AI 가상 고객 구현**: 보정된 텍스트 데이터를 기반으로 sLLM을 파인튜닝하여, 실제 고객처럼 행동하는 도메인 특화 AI 가상 고객 캐릭터 개발
- **TTS 기능 구현**: 가상 고객의 텍스트 응답을 자연스러운 음성으로 변환
- **핵심 키워드 추출**: 상담 맥락에 맞는 핵심 키워드를 추출하여 실시간 답변 추천 품질 향상

## 기술적 성장 포인트

> **"불균형한 Tabular 데이터를 정복한 경험이, 도메인 특화 sLLM의 품질을 결정짓는 정교한 텍스트 전처리 역량으로 승화되었습니다."**

이전 넷플릭스 프로젝트에서 데이터 불균형이라는 실제 세상의 벽에 부딪히며 **"데이터의 분포를 이해하고 편향을 바로잡는 엔지니어링"**이 성능 향상의 핵심임을 깨달았습니다. 이 경험은 본 프로젝트에서 STT 결과물이라는 '가공되지 않은 불완전한 데이터'를 처리할 때 결정적인 역할을 했습니다.

카드사 도메인 지식을 반영한 텍스트 보정 로직을 직접 설계하고, 이를 바탕으로 sLLM 파인튜닝을 진행함으로써 **"범용 AI"가 아닌 "실무에 즉시 투입 가능한 특화 AI"**를 만들어내는 역량을 증명했습니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| Speech | STT, TTS |
| AI | sLLM Fine-tuning, RAG, LLM |
| NLP | 도메인 특화 텍스트 보정, 키워드 추출 |
| Data | 음성 데이터 전처리 파이프라인 |

## 팀 구성

- 4인 팀 프로젝트

## Demo 영상

- [시스템 데모 영상 1](https://www.youtube.com/watch?v=V53akHQd8jU)
- [시스템 데모 영상 2](https://www.youtube.com/watch?v=pjBJqcaVj2Y)
