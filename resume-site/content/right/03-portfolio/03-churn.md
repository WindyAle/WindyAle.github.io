---
order: 2
title: "넷플릭스 구독 이탈 예측"
period: "2025.10.01 ~ 2025.10.15 (2주)"
description: "LightGBM 기반 구독 이탈 예측 모델 개발 및 하이퍼파라미터 튜닝을 통한 정밀도 96% 달성"
content_type: "portfolio"
public: true
badges: ["Precision 96%", "LightGBM", "Data Analysis", "Feature Engineering"]
github: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-2nd-3Team"
image: "/images/projects/netflix_churn/main.png"
thumbnail: "/images/projects/netflix_churn/thumbnail.png"
gallery:
  - "/images/projects/netflix_churn/1.png"
  - "/images/projects/netflix_churn/2.png"
  - "/images/projects/netflix_churn/3.png"
---

# 넷플릭스 구독 이탈 예측 프로젝트

> **구독 경제의 핵심, 이탈률 방어**
> 데이터 기반으로 고객 이탈 징후를 사전에 포착하고 방어 전략을 수립합니다.

## 프로젝트 배경

넷플릭스 사용자 데이터를 기반으로 유저의 특성을 분석하고, 구독 이탈(Churn) 가능성을 예측하는 플랫폼을 개발했습니다. 다양한 사용자 행동, 결제 패턴, 선호 장르, 기기 사용 등 다양한 정보를 종합하여 이탈 위험이 높은 사용자를 사전에 식별하는 것이 목표입니다.

## 핵심 성과

- **높은 정밀도**: LightGBM 모델을 사용하여 **정밀도(Precision) 96%**를 달성했습니다.
- **인사이트 도출**: 요금 부담률, 고객 문의 수, 특정 연령대 등 이탈에 영향을 미치는 핵심 요인을 규명했습니다.
- **시각화**: Streamlit 대시보드를 통해 이탈 확률을 시각적으로 제공합니다.

## 담당 역할

- **LightGBM 기반 예측 모델 구현**: 이탈 예측을 위한 LightGBM 모델 설계 및 구현
- **하이퍼파라미터 튜닝**: 모델 성능 최적화를 위한 체계적인 하이퍼파라미터 탐색 및 조정
- **피처 엔지니어링**: 소득 대비 요금 부담률(Price_Burden_Ratio), 가성비 만족도(Satisfaction_per_Dollar) 등 파생 변수 생성

## 기술 스택

| 분류 | 기술 |
|------|------|
| Data | Pandas, NumPy |
| ML | Scikit-learn, LightGBM |
| Viz | Matplotlib, Seaborn, Streamlit |

## 팀 구성

- 4인 팀 프로젝트

## 프로젝트 회고

학습용이 아닌 실제 세상의 데이터들을 다룰 때, 데이터 불균형 상황에 어떻게 대처하고 데이터를 바라봐야 하는지 많은 생각을 하게 되는 프로젝트였습니다. 한쪽 그룹만이 압도적인 분량으로 존재하는 데이터였기에 유의미한 패턴 차이를 포착하기가 어려웠고, 이것이 학습에 많은 영향을 미쳤습니다.

하지만 그 덕분에 모델이 다수 클래스로부터 일방적으로 영향을 받을 때 어떤 식으로 오류를 범하는지를 확인했고, 성능을 개선하는 과정에서 여러 가지 모델과 가중치를 선정하는 방법, 하이퍼파라미터 튜닝의 상세 과정 등을 직접 몸으로 익힐 수 있었습니다.
