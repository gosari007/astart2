// 문장 이미지 관련 함수
function showSentenceImage(sentenceIndex) {
  // 홀수 번호 문장만 이미지 표시 (실제 인덱스는 0부터 시작하므로 짝수 인덱스가 홀수 번호 문장임)
  const realSentenceNumber = sentenceIndex + 1; // 1부터 시작하는 실제 문장 번호
  
  // 홀수 번호의 문장인 경우만 이미지 표시
  if (realSentenceNumber % 2 === 1) {
    const sentenceImageContainer = document.getElementById('sentenceImageContainer');
    const sentenceImage = document.getElementById('sentenceImage');
    
    if (sentenceImageContainer && sentenceImage) {
      // 이미지 경로 설정 (홀수 번호 이미지만 존재)
      sentenceImage.src = `images/${realSentenceNumber}.jpg`;
        // 이미지 로드 이벤트
      sentenceImage.onload = function() {
        // 추가적인 스타일 적용으로 테두리 제거
        sentenceImage.style.border = 'none';
        sentenceImage.style.outline = 'none';
        sentenceImageContainer.style.display = 'block';
      };
      
      sentenceImage.onerror = function() {
        // 이미지가 없으면 컨테이너를 숨김
        console.log(`이미지 ${realSentenceNumber}.jpg를 찾을 수 없습니다.`);
        sentenceImageContainer.style.display = 'none';
      };
    }
  }
}

function hideSentenceImage() {
  const sentenceImageContainer = document.getElementById('sentenceImageContainer');
  if (sentenceImageContainer) {
    sentenceImageContainer.style.display = 'none';
  }
}

// 이미지 초기화
document.addEventListener('DOMContentLoaded', function() {
  hideSentenceImage();
});
